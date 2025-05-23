'use client';
import Input from '@/components/ui/input/input';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import styles from './updateSingleInstructor.module.css';
import Avatar from '@/components/ui/avatar/avatar';

export default function UpdateSingleInstructor({ courseId = '', data = {}, refresh = () => {} }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const formRef = useRef(null);
  const [message, setMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    if (response?.message) {
      setMessage({ text: response?.message, type: 'success' });
      refresh();
    }
    if (error?.message) {
      setMessage({ text: error?.message, type: 'error' });
    }
  }, [response, error]);

  const onClearHandler = () => {
    setMessage({ text: '', type: '' });
    formRef.current.reset();
  };

  const onAddInstructorSubmitHandler = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' });
    const formData = new FormData(event.target);
    const formDataObject = Object.fromEntries(formData);

    formData.delete('instructorName');
    formData.delete('instructorDesignation');
    formData.delete('bio');
    formData.delete('linkedin');
    formData.delete('twitter');
    formData.delete('website');

    const instructorData = {
      instructorId: data._id,
      instructor: {
        name: formDataObject.instructorName,
        designation: formDataObject.instructorDesignation,
        bio: formDataObject.bio,
        socialLinks: {
          linkedin: formDataObject.linkedin,
          twitter: formDataObject.twitter,
          website: formDataObject.website,
        },
      },
    };

    formData.append('instructorData', JSON.stringify(instructorData));

    axiosFetch({
      method: 'PATCH',
      url: configuration.courses + '/' + courseId + '/instructors',
      requestConfig: formData,
    });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onAddInstructorSubmitHandler} ref={formRef}>
        <Avatar name={data?.name} image={data?.image} size={100} />
        <p className={styles.subTitle}>Instructor:</p>
        <p className={styles.label}>Instructor image</p>
        <Input type="file" placeholder="Instructor Image" name="instructorImage" variant="secondary" />
        <p className={styles.label}>Instructor name</p>
        <Input
          type="text"
          placeholder="Instructor Name"
          name="instructorName"
          variant="secondary"
          required
          defaultValue={data?.name}
        />
        <p className={styles.label}>Instructor designation</p>
        <Input
          type="text"
          placeholder="Instructor Designation"
          name="instructorDesignation"
          variant="secondary"
          required
          defaultValue={data?.designation}
        />
        <p className={styles.label}>Instructor bio</p>
        <Input type="text" placeholder="Instructor Bio" name="bio" variant="secondary" required defaultValue={data?.bio} />

        <p className={styles.subTitle}>Instructor Social Links:</p>
        <p className={styles.label}>Linkedin</p>
        <Input
          type="text"
          placeholder="Linkedin"
          name="linkedin"
          variant="secondary"
          defaultValue={data?.socialLinks?.linkedin}
        />
        <p className={styles.label}>Twitter</p>
        <Input type="text" placeholder="Twitter" name="twitter" variant="secondary" defaultValue={data?.socialLinks?.twitter} />
        <p className={styles.label}>Website</p>
        <Input type="text" placeholder="Website" name="website" variant="secondary" defaultValue={data?.socialLinks?.website} />

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
