'use client';
import { configuration } from '@/configuration/configuration';
import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import LoadingDots from '@/components/ui/loading/loadingDots';
import moment from 'moment';
import Button from '@/components/ui/button/button';
import { Stream } from '@cloudflare/stream-react';
import CreateAssets from '@/components/admin/courses/lessons/createAssets';
import UploadVideo from '@/components/admin/courses/lessons/uploadVideo';
import Drawer from '@/components/ui/drawer/drawer';
import AssetDetails from '@/components/atom/assetDetails';
import { BiRefresh } from 'react-icons/bi';
import Tooltip from '@/components/ui/tooltip/tooltip';
import CreateQuiz from '@/components/admin/courses/lessons/Quiz/createQuiz';
import QuizDetails from '@/components/admin/courses/lessons/Quiz/quizDetails';
import { formatDuration } from '@/utils/utils';

export default function LessonDetails({ params }) {
  const unwrappedParams = React.use(params);
  const courseId = unwrappedParams.slug[0];
  const moduleId = unwrappedParams.slug[1];
  const lessonId = unwrappedParams.slug[2];
  const [response, error, loading, axiosFetch] = useAxios();
  const [isDrawerOpenCreateAssets, setIsDrawerOpenCreateAssets] = useState(false);
  const [isDrawerOpenUploadVideo, setIsDrawerOpenUploadVideo] = useState(false);
  const [isDrawerOpenCreateQuiz, setIsDrawerOpenCreateQuiz] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [videoPlayerLoading, setVideoPlayerLoading] = useState(true);

  const drawerOpenCreateAssetsRender = () => {
    return (
      <>
        {isDrawerOpenCreateAssets && (
          <Drawer title="Create Assets" closeFunction={() => setIsDrawerOpenCreateAssets(false)}>
            <CreateAssets
              courseId={courseId}
              moduleId={moduleId}
              lessonId={lessonId}
              refreshData={() => setRefreshData(!refreshData)}
            />
          </Drawer>
        )}
      </>
    );
  };

  const drawerOpenUploadVideoRender = () => {
    return (
      <>
        {isDrawerOpenUploadVideo && (
          <Drawer title="Upload Video" closeFunction={() => setIsDrawerOpenUploadVideo(false)}>
            <UploadVideo
              courseId={courseId}
              moduleId={moduleId}
              lessonId={lessonId}
              refreshData={() => setRefreshData(!refreshData)}
            />
          </Drawer>
        )}
      </>
    );
  };

  const drawerOpenCreateQuizRender = () => {
    return (
      <>
        {isDrawerOpenCreateQuiz && (
          <Drawer title="Create Quiz" closeFunction={() => setIsDrawerOpenCreateQuiz(false)} size="lg">
            <CreateQuiz courseId={courseId} moduleId={moduleId} lessonId={lessonId} />
          </Drawer>
        )}
      </>
    );
  };

  const getAllLessonData = () => {
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}`,
    });
  };

  useEffect(() => {
    getAllLessonData();
  }, [refreshData]);

  const lessonDetailsRender = () => {
    return (
      <div className={styles.details}>
        <h2 className={styles.title}>{`Lesson ${response?.data?.order}: ${response?.data?.title}`}</h2>
        <p className={styles.subtitle}># {response?.data?._id}</p>
        {response?.data?.duration && <p className={styles.subtitle}>Duration: {formatDuration(response?.data?.duration)}</p>}
        <p className={styles.subtitle}>Description: {response?.data?.description}</p>
        <p className={styles.subtitle}>Created at: {moment(response?.data?.createdAt).format('lll')}</p>
      </div>
    );
  };

  const streamVideoRender = () => {
    return (
      <>
        {response?.data?.cloudflareVideoId && (
          <div className={styles.videoContainer}>
            {videoPlayerLoading && <LoadingDots color="white" />}
            <Stream
              src={response?.data?.cloudflareVideoId}
              controls
              className={styles.video}
              onError={(error) => console.log(error)}
              onLoadedData={() => setVideoPlayerLoading(false)}
            />
          </div>
        )}
      </>
    );
  };
  const courseLongDescriptionRender = () => {
    return (
      <>
        {response?.data?.details && (
          <div className={styles.longDescriptionContainer}>
            <h2 className={styles.title}>Long Description</h2>
            <div
              className={styles.longDescription}
              dangerouslySetInnerHTML={{
                __html: response?.data?.details,
              }}
            ></div>
          </div>
        )}
      </>
    );
  };

  const quizRender = () => {
    return (
      <div className={styles.quizContainer}>
        <QuizDetails courseId={courseId} moduleId={moduleId} lessonId={lessonId} />
      </div>
    );
  };

  return (
    <div className={styles.main}>
      {drawerOpenCreateAssetsRender()}
      {drawerOpenUploadVideoRender()}
      {drawerOpenCreateQuizRender()}
      {loading && <LoadingDots />}
      {response?.data && !loading && !error && (
        <div className={styles.container}>
          <div className={styles.top}>
            {lessonDetailsRender()}
            <div className={styles.buttonContainer}>
              <Tooltip content="Refresh" placement="top">
                <BiRefresh className={styles.refreshIcon} onClick={() => setRefreshData(!refreshData)} />
              </Tooltip>
              <div className={styles.btnContainer}>
                <Button text="Upload Video" onClick={() => setIsDrawerOpenUploadVideo(true)} variant="outLined" />
                <Button text="Create Assets" onClick={() => setIsDrawerOpenCreateAssets(true)} />
                {/* <Button text="Create Quiz" variant="secondary" onClick={() => setIsDrawerOpenCreateQuiz(true)} /> */}
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            {response?.data?.cloudflareVideoId && <div className={styles.left}>{streamVideoRender()}</div>}
            <div className={styles.right}>
              {/* <small>Lesson Details</small> */}
              <h2 className={styles.title}>Assets</h2>

              {response?.data?.assets?.length > 0 ? (
                response?.data?.assets?.map((asset, i) => (
                  <div key={i}>
                    <AssetDetails
                      title={asset?.title}
                      type={asset?.fileType}
                      size={asset?.fileSize}
                      viewUrl={asset?.fileUrl}
                      refresh={() => setRefreshData(!refreshData)}
                      url={`${configuration.courses}/${courseId}/modules/${moduleId}/lessons/${lessonId}/assets/${asset?._id}`}
                    />
                  </div>
                ))
              ) : (
                <p className={styles.emptyText}>No assets available</p>
              )}
            </div>
          </div>
          {courseLongDescriptionRender()}
          {quizRender()}
        </div>
      )}
    </div>
  );
}
