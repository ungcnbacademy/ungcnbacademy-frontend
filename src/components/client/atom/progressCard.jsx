import React, { useEffect, useState } from 'react';
import styles from './progressCard.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Collapse from '@/components/ui/collapse/collapse';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import { IoArrowForward } from 'react-icons/io5';
import Button from '@/components/ui/button/button';
import LoadingDots from '@/components/ui/loading/loadingDots';
import CheckMark from './checkMark';
export default function ProgressCard({ courseId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [myModules, setMyModules] = useState([]);
  const router = useRouter();
  useEffect(() => {
    axiosFetch({
      method: 'GET',
      url: configuration.courses + '/' + courseId,
    });
  }, []);

  useEffect(() => {
    if (!response?.data) return;
    if (response?.data?.enrollment?.type === 'full') {
      setMyModules(response?.data?.modules);
    } else if (response?.data?.enrollment?.type === 'module') {
      const enrolledModules = response?.data?.enrollment?.enrolledModules;
      setMyModules(
        response?.data?.modules.filter((module) => enrolledModules.some((enrolledModule) => enrolledModule.module === module._id))
      );
    }
  }, [response]);

  return (
    <div className={styles.main}>
      {loading && <LoadingDots />}
      {response?.data && !error && !loading && (
        <div className={styles.details}>
          <p className={styles.title2}>{response?.data?.title}</p>
          <p className={styles.subTitle}>Purchase Type: {response?.data?.enrollment?.type.toUpperCase()}</p>
          <p className={styles.subTitle}>Enrolled at: {moment(response?.data?.enrollment?.enrolledAt).format('lll')}</p>
          <div className={styles.progressContainer}>
            <p className={styles.progressText}>Progress: {Number(response?.data?.progress?.overallProgress).toFixed(2)}%</p>
            <div className={styles.progressLineBackground}>
              <div className={styles.progressLine} style={{ width: `${response?.data?.progress?.overallProgress}%` }}></div>
            </div>
          </div>
          <div className={styles.courseBtnContainer}>
            <div
              className={styles.startNowContainer}
              onClick={() => {
                router.push(`/client/my-courses/${response?.data?._id}`);
              }}
            >
              <p className={styles.startNow}>Start learning</p>
              <IoArrowForward className={styles.icon} />
            </div>
            {Number(response?.data?.progress?.overallProgress) === 100 && response?.data?.enrollment?.type === 'full' && (
              <Button
                text="Course Certificate"
                className={styles.certificateBtn}
                variant="primary"
                onClick={() => {
                  router.push('/client/certificate/' + response?.data?._id);
                }}
              />
            )}
          </div>

          <br />
          {myModules &&
            myModules.map((module, i) => (
              <Collapse
                key={i}
                data={[
                  {
                    title: `Module ${module.order}. ${module.title}`,
                    description: '',
                    children: (
                      <div className={styles.moduleProgressContainer}>
                        {module.lessons.map((lesson) => (
                          <div key={lesson._id} className={styles.lessonProgressContainer}>
                            <div className={styles.lessonTitleContainer}>
                              {lesson?.progress?.completed && <CheckMark />}
                              <p
                                className={styles.lessonTitle}
                                style={!lesson?.progress?.completed ? { marginLeft: '18px' } : {}}
                              >
                                Lesson {lesson.order}. {lesson.title}
                              </p>
                            </div>
                            <p className={styles.lessonStatus}>
                              Status: {lesson?.progress?.completed ? 'Completed, Progress: 100%' : 'Not Completed, Progress: 0%'}
                            </p>
                          </div>
                        ))}
                        <div className={styles.moduleCertificateContainer}>
                          {Number(module?.progress?.progress) === 100 && (
                            <Button
                              text="Module Certificate"
                              onClick={() => {
                                router.push('/client/certificate/' + response?.data?._id + '/' + module?._id);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    ),
                  },
                ]}
              ></Collapse>
            ))}
        </div>
      )}
    </div>
  );
}
