'use client';
import React, { useEffect, useState } from 'react';
import styles from './viewTrailer.module.css';
import { Stream } from '@cloudflare/stream-react';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import LoadingDots from '@/components/ui/loading/loadingDots';
export default function ViewTrailer({ courseId = '', videoId = '' }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [videoPlayerLoading, setVideoPlayerLoading] = useState(true);
  const [streamingVideoId, setStreamingVideoId] = useState(videoId);

  useEffect(() => {
    if (!courseId) return;
    axiosFetch({
      method: 'Get',
      url: `${configuration.courses}/${courseId}`,
    });
  }, []);

  useEffect(() => {
    if (!courseId) return;
    if (response?.data?.trailerCloudflareVideoId) {
      setStreamingVideoId(response?.data?.trailerCloudflareVideoId);
    }
  }, [response?.data]);

  return (
    <div className={styles.main}>
      {loading && <LoadingDots />}
      {streamingVideoId && !error && (
        <div className={styles.videoContainer}>
          {videoPlayerLoading && <LoadingDots color="white" />}
          <Stream
            src={streamingVideoId}
            controls
            className={styles.video}
            onError={(error) => console.log(error)}
            onLoadedData={() => setVideoPlayerLoading(false)}
          />
        </div>
      )}
      {!streamingVideoId && !loading && !error && <p className={styles.noTrailer}>No trailer available.</p>}
    </div>
  );
}
