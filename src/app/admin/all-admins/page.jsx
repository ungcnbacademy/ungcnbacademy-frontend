'use client';
import Button from '@/components/ui/button/button';
import React, { useState } from 'react';
import styles from './page.module.css';
import Drawer from '@/components/ui/drawer/drawer';
import AllAdministration from '@/components/admin/admininstrators/allAdministration';
export default function AllAdmins() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const drawerRender = () => {
		return (
			<>
				{isOpenDrawer && (
					<Drawer
						title="Create Admin"
						closeFunction={() => setIsOpenDrawer(false)}
					>
						{/* <CreateRechargerAdmin/> */}
					</Drawer>
				)}
			</>
		);
	};
  return (
    <div className={styles.main}>
			{drawerRender()}
			<div className={styles.header}>
				<h2 className={styles.title}>Administrators</h2>
				<Button
					text="Create Admin"
					variant="primary"
					onClick={() => setIsOpenDrawer(!isOpenDrawer)}
				/>
			</div>
			<div className={styles.container}>
				<AllAdministration/>
			</div>
		</div>
  )
}
