'use client';
import Button from '@/components/ui/button/button';
import React, { useState } from 'react';
import styles from './page.module.css';
import Drawer from '@/components/ui/drawer/drawer';
import AllLessons from '@/components/admin/courses/lessons/allLessons';
import SingleModuleDetails from '@/components/admin/courses/modules/singleModuleDetails';
import CreateLesson from '@/components/admin/courses/lessons/createLesson';

export default function ModuleDetails({ params }) {
  const unwrappedParams = React.use(params);
  const courseId = unwrappedParams.slug[0];
  const moduleId = unwrappedParams.slug[1];
  const [refreshData, setRefreshData] = useState(false);

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const drawerRender = () => {
    return (
      <>
        {isOpenDrawer && (
          <Drawer title="Create Lesson" closeFunction={() => setIsOpenDrawer(false)} size="lg">
            <CreateLesson courseId={courseId} moduleId={moduleId} refreshData={() => setRefreshData(!refreshData)} />
          </Drawer>
        )}
      </>
    );
  };

  return (
    <div className={styles.main}>
      {drawerRender()}
      <SingleModuleDetails courseId={courseId} moduleId={moduleId} />
      <div className={styles.header}>
        <h2 className={styles.title}>All Lessons:</h2>
        <Button text="Create Lesson" variant="primary" onClick={() => setIsOpenDrawer(!isOpenDrawer)} />
      </div>
      <div className={styles.container}>
        <AllLessons courseId={courseId} moduleId={moduleId}  refresh={refreshData}/>
      </div>
    </div>
  );
}
