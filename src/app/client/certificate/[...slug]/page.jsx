'use client';
import React, { use, useEffect } from 'react';
import styles from './page.module.css';
import GenerateCertificate from '@/components/atom/generateCertificate';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import LoadingDots from '@/components/ui/loading/loadingDots';
import moment from 'moment';
export default function Certificate({ params }) {
  const unwrappedParams = use(params);
  const courseId = unwrappedParams.slug[0];
  const moduleId = unwrappedParams.slug[1];
  const [response, error, loading, axiosFetch] = useAxios();

  useEffect(() => {
    let url;
    if (courseId && !moduleId) {
      url = `${configuration.certificate}/${courseId}/certificate`;
    } else if (courseId && moduleId) {
      url = `${configuration.certificate}/${courseId}/modules/${moduleId}/certificate`;
    }
    axiosFetch({
      method: 'Get',
      url: url,
    });
  }, []);

  return (
    <div className={styles.main}>
      {loading && <LoadingDots />}
      {response?.data?.studentName && !loading && !error && (
        <GenerateCertificate
          name={response?.data?.studentName}
          title={response?.data?.moduleTitle || response?.data?.courseTitle}
          date={moment(response?.data?.issueDate).format('DD MMM YYYY')}
          certificateId={response?.data?.certificateId}
        />
      )}
    </div>
  );
}
