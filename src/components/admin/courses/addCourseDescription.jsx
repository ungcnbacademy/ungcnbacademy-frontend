'use client';
import React, { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/button/button';
import useAxios from '@/hooks/useAxios';
import Message from '@/components/ui/message/message';
import { configuration } from '@/configuration/configuration';
import styles from './addCourseDescription.module.css';
import TextEditor from '../atom/textEditor';

export default function AddCourseDescription({ id = '', refresh = () => {}, content = {} }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const formRef = useRef(null);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [courseOverview, setCourseOverview] = useState();
  const [learning, setLearning] = useState();
  const [courseReq, setCourseReq] = useState();
  const [courseBenefit, setCourseBenefit] = useState();
  const [whyChoose, setWhyChoose] = useState();

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

  const onCreateHandler = (event) => {
    event.preventDefault();
    setMessage({ text: '', type: '' });

    const payload = {
      courseOverview,
      learning,
      courseReq,
      courseBenefit,
      whyChoose,
    };

    const formData = new FormData();
    formData.append('courseInfo', JSON.stringify(payload));
    console.log(Object.fromEntries(formData));

    axiosFetch({
      method: 'PUT',
      url: `${configuration.courses}/${id}/details`,
      requestConfig: formData,
    });
  };

  return (
    <div className={styles.main}>
      <form className={styles.form} onSubmit={onCreateHandler} ref={formRef}>
        <p className={styles.subTitle}>Course details:</p>

        <p className={styles.label}>Course overview</p>
        <TextEditor setData={setCourseOverview} defaultValue={content?.courseOverview} />

        <p className={styles.label}>Learning outcomes</p>
        <TextEditor setData={setLearning} defaultValue={content?.learning} />

        <p className={styles.label}>Course requirements</p>
        <TextEditor setData={setCourseReq} defaultValue={content?.courseReq} />

        <p className={styles.label}>Course benefits</p>
        <TextEditor setData={setCourseBenefit} defaultValue={content?.courseBenefit} />

        <p className={styles.label}>Why choose this course</p>
        <TextEditor setData={setWhyChoose} defaultValue={content?.whyChoose} />

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
