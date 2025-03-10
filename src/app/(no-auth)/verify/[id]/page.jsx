'use client';
import React, { use, useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Message from '@/components/ui/message/message';
import GenerateCertificate from '@/components/atom/generateCertificate';
import LoadingDots from '@/components/ui/loading/loadingDots';
import moment from 'moment';
import Header from '@/components/atom/header';

export default function VerifyCertificate({ params }) {
  const unwrappedParams = use(params);
  const certificateId = unwrappedParams.id;
  const [response, error, loading, axiosFetch] = useAxios();
  const [message, setMessage] = useState('');

  useEffect(() => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.certificate}/verify/${certificateId}`,
    });
  }, []);

  useEffect(() => {
    if (error?.message) {
      setMessage({ text: error?.message, type: 'error' });
    }
  }, [error]);

  return (
    <>
      <Header title={'Certificate Verification'} description={'Enter your certificate code to verify'} />
      <div className={styles.main}>
        {loading && <LoadingDots />}
        {message?.text && <Message text={message?.text} type={message?.type} />}
        {response?.data && !loading && !error && (
          <GenerateCertificate
            name={response?.data?.studentName}
            title={response?.data?.moduleTitle || response?.data?.courseTitle}
            date={moment(response?.data?.issueDate).format('DD MMM YYYY')}
            certificateId={response?.data?.certificateId}
          />
        )}
      </div>
    </>
  );
}
