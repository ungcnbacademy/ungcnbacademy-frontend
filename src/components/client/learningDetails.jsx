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
import Button from '../ui/button/button';
import { redirect } from 'next/navigation';

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

  //This is the function to determine which lesson to select
  const selectLesson = () => {
    const modules = response?.data?.modules || [];
    const enrollment = response?.data?.enrollment;

    if (!enrollment) return;

    if (enrollment.type === 'full') {
      // Full enrollment logic
      for (const module of modules) {
        for (const lesson of module.lessons) {
          if (!lesson.progress?.completed) {
            setSelectedLesson({ moduleId: module._id, lessonId: lesson._id });
            return;
          }
        }
      }
      // If all lessons are completed, select the first one
      if (modules[0]?.lessons[0]) {
        setSelectedLesson({
          moduleId: modules[0]._id,
          lessonId: modules[0].lessons[0]._id,
        });
      }
    } else if (enrollment.type === 'module') {
      // Module-specific enrollment logic
      const enrolledModules = enrollment.enrolledModules || [];
      for (const enrolledModule of enrolledModules) {
        const module = modules.find((mod) => mod._id === enrolledModule.module);
        if (module) {
          for (const lesson of module.lessons) {
            if (!lesson.progress?.completed) {
              setSelectedLesson({ moduleId: module._id, lessonId: lesson._id });
              return;
            }
          }
          // If all lessons are completed, select the first lesson in the enrolled module
          if (module.lessons[0]) {
            setSelectedLesson({ moduleId: module._id, lessonId: module.lessons[0]._id });
            return;
          }
        }
      }
    }
  };

  // Set the first lesson as selected
  useEffect(() => {
    selectLesson();
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
              progress={module?.progress?.progress}
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
            <div className={styles.lessonHeader}>
              <p className={styles.title}>
                Lesson {responseLesson?.data?.order}: {responseLesson?.data?.title}
              </p>
              <p className={styles.subtitle}>{responseLesson?.data?.description}</p>
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

            {responseLesson?.data?.quizSettings?.required && (
              <div className={styles.quizContainer}>
                <h1 className={styles.heading}>Quiz</h1>
                <p className={styles.text}>This lesson requires a quiz to be completed.</p>
                <Button
                  text="Take Quiz"
                  onClick={() => redirect(`/client/my-courses/quiz/${id}/${responseLesson?.data?.module}/${responseLesson?.data?._id}`)}
                />
              </div>
            )}

            <br />
            <br />
            <br />
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
