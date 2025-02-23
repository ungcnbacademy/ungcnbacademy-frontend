'use client';
import React, { useEffect, useState } from 'react';
import styles from './layoutHeader.module.css';
import Avatar from '@/components/ui/avatar/avatar';
import { AiOutlineLogout } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa6';
import { IoHelp } from 'react-icons/io5';
import Image from 'next/image';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { userRoles } from '@/constants/constants';

export default function LayoutHeader() {
  const [userDetails, setUserDetails] = useState({});
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUserDetails(userData?.data);
    }
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.main}>
      <Link href="/">
        <Image src="/logoBlack.svg" priority={true} alt="Logo" width={110} height={50} style={{ visibility: 'visible' }} />
      </Link>

      <div className={styles.dropdown} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
        <Avatar name={userDetails?.firstName || 'n'} />
        <div className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}>
          <p className={styles.name}>{userDetails?.firstName + ' ' + userDetails?.lastName || 'not available'}</p>
          <p className={styles.details}>
            Role: {(userDetails?.role && userRoles?.admin[userDetails?.role]?.title) || 'not available'}
          </p>
          <div className={styles.item}>
            <FaRegUser className={styles.icon} />
            Profile
          </div>
          <div className={styles.item}>
            <IoHelp className={styles.icon} />
            Help
          </div>
          <div className={styles.item} onClick={() => redirect('/logout')}>
            <AiOutlineLogout className={styles.icon} /> Logout
          </div>
        </div>
      </div>
    </div>
  );
}
