import React, { useEffect, useState } from 'react';
import styles from './progressCard.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Collapse from '@/components/ui/collapse/collapse';
export default function ProgressCard({ courseId }) {
  const [response, error, loading, axiosFetch] = useAxios();
  const [myModules, setMyModules] = useState([]);

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

  console.log(myModules);

  return (
    <div>
      {myModules.map((module, i) => (
        <Collapse
          key={i}
          data={[
            {
              title: module.title,
              description: '',
              children: (
                <>
                  {module.lessons.map((lesson) => (
                    <div key={lesson._id} className={styles.progressCard}>
                      <div className={styles.progressCardTitle}>{lesson.title}</div>
                      <div className={styles.progressCardProgress}>
                        <div className={styles.progressCardProgressInner} style={{ width: `${lesson.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </>
              ),
            },
          ]}
        ></Collapse>
      ))}
    </div>
  );
}
