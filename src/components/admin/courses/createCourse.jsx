'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import Select from '@/components/ui/select/select';
import styles from './createCourse.module.css';
import TextEditor from '../atom/textEditor';
import LoadingDots from '@/components/ui/loading/loadingDots';

export default function CreateCourse({ id = '' }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [responseGetInfo, errorGetInfo, loadingGetInfo, axiosFetchGetInfo] = useAxios();
  const formRef = useRef(null);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [longDescription, setLongDescription] = useState();

  useEffect(() => {
    if (!id) return;
    axiosFetchGetInfo({
      method: 'GET',
      url: configuration.courses + '/' + id,
    });
  }, [id]);

  useEffect(() => {
    if (response?.message) {
      setMessage({ text: response?.message, type: 'success' });
    }
    if (error?.message) {
      setMessage({ text: error?.message, type: 'error' });
    }
  }, [response, error]);

  const onClearHandler = () => {
    setMessage({ text: '', type: '' });
    formRef.current.reset();
  };

  const onCreateCourseSubmitHandler = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' });
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData);

    formData.delete('title');
    formData.delete('description');
    formData.delete('category');
    formData.delete('price');
    formData.delete('featured');
    formData.delete('instructorName');
    formData.delete('instructorDesignation');
    formData.delete('bio');
    formData.delete('linkedin');
    formData.delete('twitter');
    formData.delete('website');

    const courseData = {
      title: formDataObject.title,
      description: formDataObject.description,
      longDescription: longDescription, // Use the longDescription state
      category: formDataObject.category,
      price: formDataObject.price,
      featured: formDataObject.featured,
      instructors: [
        {
          name: formDataObject.instructorName,
          designation: formDataObject.instructorDesignation,
          bio: formDataObject.bio,
          socialLinks: {
            linkedin: formDataObject.linkedin,
            twitter: formDataObject.twitter,
            website: formDataObject.website,
          },
        },
      ],
    };

    formData.append('courseData', JSON.stringify(courseData));

    axiosFetch({
      method: id ? 'PUT' : 'POST',
      url: id ? configuration.courses + '/' + id : configuration.courses,
      requestConfig: formData,
    });
  };

  return (
    <div className={styles.main}>
      {loadingGetInfo && !errorGetInfo && <LoadingDots />}
      <form className={styles.form} onSubmit={onCreateCourseSubmitHandler} ref={formRef}>
        <p className={styles.subTitle}>Course details:</p>
        <p className={styles.label}>Title</p>
        <Input
          type="text"
          placeholder="Course Title"
          name="title"
          variant="secondary"
          defaultValue={responseGetInfo?.data?.title}
          required
        />
        <p className={styles.label}>Course Description</p>
        <Input
          type="text"
          placeholder="Course Description"
          name="description"
          variant="secondary"
          defaultValue={responseGetInfo?.data?.description}
          required
        />
        <p className={styles.label}>Long Description</p>
        <TextEditor setData={setLongDescription} defaultValue={responseGetInfo?.data?.longDescription} />
        <p className={styles.label}>Category</p>
        <Input
          type="text"
          placeholder="Category"
          name="category"
          variant="secondary"
          defaultValue={responseGetInfo?.data?.category}
          required
        />
        <p className={styles.label}>Course image</p>
        <Input type="file" placeholder="Course Image" name="thumbnail" variant="secondary" />
        <p className={styles.label}>Is Featured?</p>
        <Select
          name="featured"
          options={[
            { label: 'Yes', value: true },
            { label: 'No', value: false },
          ]}
          variant="secondary"
          defaultValue={responseGetInfo?.data?.featured}
        />

        <p className={styles.subTitle}>Pricing:</p>
        <p className={styles.label}>Course price in BDT</p>
        <Input
          type="number"
          placeholder="Course Price"
          name="price"
          variant="secondary"
          defaultValue={responseGetInfo?.data?.price}
          required
        />

        <p className={styles.subTitle}>Instructor:</p>
        <p className={styles.label}>Instructor image</p>
        <Input type="file" placeholder="Instructor Image" name="instructorImages" variant="secondary" />
        <p className={styles.label}>Instructor name</p>
        <Input
          type="text"
          placeholder="Instructor Name"
          name="instructorName"
          variant="secondary"
          defaultValue={responseGetInfo?.data?.instructors[0]?.name}
          required
        />
        <p className={styles.label}>Instructor designation</p>
        <Input
          type="text"
          placeholder="Instructor Designation"
          name="instructorDesignation"
          defaultValue={responseGetInfo?.data?.instructors[0]?.designation}
          variant="secondary"
          required
        />
        <p className={styles.label}>Instructor bio</p>
        <Input
          type="text"
          placeholder="Instructor Bio"
          name="bio"
          defaultValue={responseGetInfo?.data?.instructors[0]?.bio}
          variant="secondary"
          required
        />

        <p className={styles.subTitle}>Instructor Social Links:</p>
        <p className={styles.label}>Linkedin</p>
        <Input
          type="text"
          placeholder="Linkedin"
          name="linkedin"
          variant="secondary"
          defaultValue={responseGetInfo?.data?.instructors[0]?.socialLinks?.linkedin}
        />
        <p className={styles.label}>Twitter</p>
        <Input
          type="text"
          placeholder="Twitter"
          name="twitter"
          variant="secondary"
          defaultValue={responseGetInfo?.data?.instructors[0]?.socialLinks?.twitter}
        />
        <p className={styles.label}>Website</p>
        <Input
          type="text"
          placeholder="Website"
          name="website"
          variant="secondary"
          defaultValue={responseGetInfo?.data?.instructors[0]?.socialLinks?.website}
        />

        <div className={styles.submitContainer}>
          <Message text={message.text} type={message.type} loading={loading} />
          <div className={styles.buttonContainer}>
            <Button text="Clear" variant="outLined" disabled={loading} onClick={onClearHandler} />
            <Button type="submit" text="Submit" variant="primary" loading={loading} disabled={loading} />
          </div>
        </div>
      </form>
    </div>
  );
}
