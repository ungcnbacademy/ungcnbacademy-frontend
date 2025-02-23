'use client';
import React, { useState } from 'react';
import Drawer from '@/components/ui/drawer/drawer';
import Button from '@/components/ui/button/button';
import styles from './page.module.css';
import AllCourses from '@/components/admin/courses/allCourses';
import CreateCourse from '@/components/admin/courses/createCourse';

export default function Courses() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const drawerRender = () => {
    return (
      <>
        {isOpenDrawer && (
          <Drawer title="Create Course" closeFunction={() => setIsOpenDrawer(false)} size="lg">
            <CreateCourse />
          </Drawer>
        )}
      </>
    );
  };
  return (
    <div className={styles.main}>
      {drawerRender()}
      <div className={styles.header}>
        <h2 className={styles.title}>Courses</h2>
        <Button text="Create Course" variant="primary" onClick={() => setIsOpenDrawer(!isOpenDrawer)} />
      </div>
      <div className={styles.container}>
        <AllCourses />
      </div>
    </div>
  );
}
