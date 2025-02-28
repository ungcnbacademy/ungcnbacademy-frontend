'use client';
import React, { useEffect, useState } from 'react';
import styles from './learningDetails.module.css';
import { Stream } from '@cloudflare/stream-react';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import LoadingDots from '../ui/loading/loadingDots';
import ContentCardModule from './atom/contentCardModule';
import ContentCardLesson from './atom/contentCardLesson';
import { IoMdClose } from 'react-icons/io';
import { ImArrowLeft } from 'react-icons/im';
import { IoCloseCircleSharp } from 'react-icons/io5';

export default function LearningDetails({ id }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [videoPlayerLoading, setVideoPlayerLoading] = useState(true);
  //const [selectedLessonDetails, setSelectedLessonDetails] = useState(null);
  const [responseLesson, errorLesson, loadingLesson, axiosFetchLesson] = useAxios();
  const [showCourseContent, setShowCourseContent] = useState(true);

  useEffect(() => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${id}`,
    });
  }, []);

  const getLessonDataHandler = (moduleId, lessonId) => {
    axiosFetchLesson({
      method: 'Get',
      url: `${configuration.courses}/${id}/modules/${moduleId}/lessons/${lessonId}`,
    });
  };

  useEffect(() => {
    if (selectedLesson) {
      getLessonDataHandler(selectedLesson.moduleId, selectedLesson.lessonId);
    }
  }, [selectedLesson]);

  const checkWhichLessonToBeSelected = () => {
    for (let i = 0; i < response?.data?.modules.length; i++) {
      for (let j = 0; j < response?.data?.modules[i].lessons.length; j++) {
        if (!response?.data?.modules[i].lessons[j].progress?.completed) {
          setSelectedLesson({
            moduleId: response?.data?.modules[i]._id,
            lessonId: response?.data?.modules[i].lessons[j]._id,
          });
          return;
        } else {
          setSelectedLesson({
            moduleId: response?.data?.modules[0]._id,
            lessonId: response?.data?.modules[0].lessons[0]._id,
          });
        }
      }
    }
  };

  const checkWhichLessonToBeSelected2 = () => {
    for (let i = 0; i < response?.data?.modules.length; i++) {
      for (let j = 0; j < response?.data?.modules[i].lessons.length; j++) {
        for (let k = 0; k < response?.data?.enrollment?.enrolledModules.length; k++) {
          if (response?.data?.modules[i]._id === response?.data?.enrollment?.enrolledModules[k].module) {
            if (!response?.data?.modules[i].lessons[j].progress?.completed) {
              setSelectedLesson({
                moduleId: response?.data?.modules[i]._id,
                lessonId: response?.data?.modules[i].lessons[j]._id,
              });
              return;
            } else {
              // if all lessons are completed then select the first one but the module id has to be in response?.data?.enrollment?.enrolledModules[k].module
              response?.data?.modules.map((module) => {
                response?.data?.enrollment?.enrolledModules.map((enrolledModule) => {
                  if (module._id === enrolledModule.module) {
                    if (module.lessons[0]) {
                      setSelectedLesson({
                        moduleId: module._id,
                        lessonId: module.lessons[0]._id,
                      });
                    }
                  }
                });
              });
            }
          }
        }
      }
    }
  }

  // Set the first lesson as selected
  useEffect(() => {
    if (response?.data?.enrollment?.type === 'full') {
      checkWhichLessonToBeSelected();
    } else if (response?.data?.enrollment?.type === 'module') {
      checkWhichLessonToBeSelected2();
    }
  }, [response]);

  //to check if the module is bought or not so the lessons can be unlocked
  const checkIfLessonIsLocked = (id) => {
    if (response?.data?.enrollment?.type === 'module') {
      const isEnrolled = response.data.enrollment.enrolledModules.some((enrolledModule) => enrolledModule.module === id);
      if (isEnrolled) {
        // If module is found
        return false;
      } else {
        // If module is not found
        return true;
      }
    } else if (response?.data?.enrollment?.type === 'full') {
      return false;
    } else {
      return true;
    }
  };

  const courseContentListViewRender = () => {
    return (
      <>
        {response?.data?.modules && (
          <div className={styles.courseContentHeader}>
            <p className={styles.title}>Course Content</p>
            <IoMdClose onClick={() => setShowCourseContent(false)} className={styles.closeIcon} />
          </div>
        )}
        {response?.data?.modules &&
          response?.data?.modules?.map((module, i) => (
            <ContentCardModule
              key={i}
              order={module.order}
              title={module.title}
              totalLesson={module.totalLessons}
              selected={selectedLesson?.moduleId === module._id}
              children={module.lessons.map((lesson, i) => (
                <ContentCardLesson
                  key={i}
                  order={lesson.order}
                  title={lesson.title}
                  hasVideo={lesson.hasVideo}
                  totalAssets={lesson.totalAssets}
                  videoDuration={lesson.duration}
                  selected={selectedLesson?.moduleId === module._id && selectedLesson?.lessonId === lesson._id}
                  onClick={() => {
                    setSelectedLesson({
                      moduleId: module._id,
                      lessonId: lesson._id,
                    });
                  }}
                  isQuizRequired={lesson?.quiz}
                  isLocked={checkIfLessonIsLocked(module._id)}
                  courseId={id}
                  moduleId={module._id}
                  lessonId={lesson._id}
                  checked={lesson?.progress?.completed}
                  //lockMessage='Buy this module to unlock this lesson'
                />
              ))}
            />
          ))}
      </>
    );
  };

  const lessonDetailsRender = () => {
    return (
      <>
        {loadingLesson && <LoadingDots />}
        {responseLesson?.data && !loadingLesson && !errorLesson && (
          <div className={styles.lessonDetails}>
            {!showCourseContent && (
              <div className={styles.showContent} onClick={() => setShowCourseContent(!showCourseContent)}>
                <ImArrowLeft /> <p className={styles.text}>Course Content</p>
              </div>
            )}
            {responseLesson?.data?.cloudflareVideoId && (
              <div className={styles.videoContainerWrapper}>
                <div className={styles.videoContainer}>
                  {videoPlayerLoading && <LoadingDots color="white" />}
                  <Stream
                    src={responseLesson?.data?.cloudflareVideoId}
                    controls
                    className={styles.video}
                    onError={(error) => console.log(error)}
                    onLoadedData={() => setVideoPlayerLoading(false)}
                  />
                </div>
              </div>
            )}

            <div className={styles.lessonHeader}>
              <p className={styles.title}>
                Lesson {responseLesson?.data?.order}: {responseLesson?.data?.title}
              </p>
              <p className={styles.subtitle}>{responseLesson?.data?.description}</p>
            </div>
            <div className={styles.content}>
              {responseLesson?.data?.details && (
                <div
                  dangerouslySetInnerHTML={{
                    __html: responseLesson?.data?.details,
                  }}
                  className={styles.longDescription}
                ></div>
              )}
            </div>
            <div className={styles.assets}>
              <h1 className={styles.heading}>Lesson assets</h1>
              {responseLesson?.data?.assets.length > 0 ? (
                responseLesson?.data?.assets.map((asset, i) => (
                  <div key={i} className={styles.assetContainer}>
                    <a href={asset.fileUrl} target="_blank" className={styles.title}>
                      {i + 1}. {asset.title}
                    </a>
                  </div>
                ))
              ) : (
                <p className={styles.noAssets}>No assets available.</p>
              )}
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={styles.main}>
      {loading && <LoadingDots />}
      {!loading && !error && (
        <>
          <div className={styles.left}>
            {responseLesson && !errorLesson && lessonDetailsRender()}
            {errorLesson && (
              <div className={styles.noAccess}>
                <IoCloseCircleSharp className={styles.icon} />
                <p className={styles.text}>{errorLesson.message}</p>
              </div>
            )}
          </div>
          <div className={styles.right} style={showCourseContent ? {} : { display: 'none' }}>
            {courseContentListViewRender()}
          </div>
        </>
      )}
    </div>
  );
}
