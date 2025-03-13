'use client';
import React, { useEffect, useState } from 'react';
import styles from './viewTrailer.module.css';
import { Stream } from '@cloudflare/stream-react';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import LoadingDots from '@/components/ui/loading/loadingDots';
export default function ViewTrailer({ courseId, videoId = null }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [videoPlayerLoading, setVideoPlayerLoading] = useState(true);

  useEffect(() => {
    if (!courseId) return;
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}`,
    });
  }, []);

  return (
    <div className={styles.main}>
      {loading && <LoadingDots/>}
      {videoId ||
        (response?.data?.trailerCloudflareVideoId && (
          <div className={styles.videoContainer}>
            {videoPlayerLoading && <LoadingDots color="white" />}
            <Stream
              src={videoId || response?.data?.trailerCloudflareVideoId}
              controls
              className={styles.video}
              onError={(error) => console.log(error)}
              onLoadedData={() => setVideoPlayerLoading(false)}
            />
          </div>
        ))}
        {!videoId && !response?.data?.trailerCloudflareVideoId && !loading && (
          <p className={styles.noTrailer}>No trailer available.</p>
        )}
    </div>
  );
}
