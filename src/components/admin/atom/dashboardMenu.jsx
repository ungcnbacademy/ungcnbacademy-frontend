'use client';
import { usePathname } from 'next/navigation';
import styles from './dashboardMenu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { MdSpaceDashboard, MdRateReview, MdReviews } from 'react-icons/md';
import { FaFileAlt } from 'react-icons/fa';
import { useState } from 'react';
import { RiAdminFill } from 'react-icons/ri';
import Tooltip from '@/components/ui/tooltip/tooltip';
import { FaUserGroup } from 'react-icons/fa6';
export default function DashboardMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  //const isActive = (path) => path === pathname;
  //this function will check if the current path is active and it will consider starts with
  const isActive = (path) => {
    if (!pathname.startsWith(path)) return false;
    return pathname.length === path.length || pathname[path.length] === '/';
  };

  const dashboardLinks = [
    // {
    //   name: 'Dashboard',
    //   link: '/admin/dashboard',
    //   icon: <MdSpaceDashboard />,
    // },
    {
      name: 'Courses',
      link: '/admin/courses',
      icon: <FaFileAlt />,
    },
    {
      name: 'Review',
      link: '/admin/quiz-review',
      icon: <MdRateReview />,
    },
    {
      name: 'Feedbacks',
      link: '/admin/all-feedbacks',
      icon: <MdReviews />,
    },
    {
      name: 'Admins',
      link: '/admin/all-admins',
      icon: <RiAdminFill />,
    },
    {
      name: 'Users',
      link: '/admin/users',
      icon: <FaUserGroup />,
    },
  ];
  return (
    <div className={styles.overlay} style={{ width: isOpen ? 'fit-content' : '75px' }}>
      <div className={styles.main}>
        <div className={styles.header}>
          <HiOutlineMenuAlt4 className={styles.menuIcon} onClick={() => setIsOpen(!isOpen)} />
          <Image
            src="/logoBlack.svg"
            priority={true}
            alt="Logo"
            width={150}
            height={50}
            style={{ display: isOpen ? 'none' : 'none' }}
          />
        </div>
        {dashboardLinks.map((item, i) => {
          return (
            <Tooltip key={i} content={!isOpen ? item.name : ''} placement="right">
              <Link className={isActive(item.link) ? `${styles.link} ${styles.active}` : `${styles.link}`} href={item.link}>
                <div className={styles.icon}>{item.icon}</div>
                <p
                  className={styles.name}
                  style={{
                    display: isOpen ? 'block' : 'none',
                  }}
                >
                  {item.name}
                </p>
              </Link>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
