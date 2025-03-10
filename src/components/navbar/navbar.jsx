'use client';
import { useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { allAdminRoles, userRoles } from '@/constants/constants';
import { IoMenuSharp } from 'react-icons/io5';
import Drawer from '../ui/drawer/drawer';

export default function Navbar({ variant = 'transparent' }) {
  //const variant = ['transparent', 'accentColor', 'white'];
  const pathParam = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [userDetails, setUserDetails] = useState();
  const [isShowMenu, setIsShowMenu] = useState(false);

  // Check scroll position to update navbar background
  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = JSON.parse(localStorage.getItem('user'));
      setUserDetails(userData);
    }
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoForDifferentVariants = {
    transparent: '/logo.svg',
    accentColor: '/logoWhite.svg',
    white: '/logoBlack.svg',
    scrolled: '/logoWhite.svg',
  };

  const nonAuthLinks = [
    {
      name: 'Home',
      link: '/',
      active: pathParam === '/',
    },
    {
      name: 'Courses',
      link: '/courses',
      active: pathParam === '/courses',
    },
    {
      name: 'About Us',
      link: '/about-us',
      active: pathParam === '/about',
      children: [
        {
          name: 'About UNGCNB',
          link: '/about-us',
          active: pathParam === '/about-us',
        },
        {
          name: 'Our Team',
          link: '/about-us#team',
          active: pathParam === '/about-us#team',
        },
        {
          name: 'Contact Us',
          link: '/contact-us',
          active: pathParam === '/contact-us',
        },
      ],
    },
    {
      name: 'Login',
      link: '/login',
      active: pathParam.startsWith('/login'),
    },
    {
      name: 'Signup',
      link: '/signup',
      active: pathParam === '/signup',
    },
  ];
  const authCustomerLinks = [
    {
      name: 'Home',
      link: '/',
      active: pathParam === '/',
    },
    {
      name: 'Courses',
      link: '/courses',
      active: pathParam === '/courses',
    },
    {
      name: 'About Us',
      link: '/about-us',
      active: pathParam === '/about',
      children: [
        {
          name: 'About UNGCNB',
          link: '/about-us',
          active: pathParam === '/about-us',
        },
        {
          name: 'Our Team',
          link: '/about-us#team',
          active: pathParam === '/about-us#team',
        },
        {
          name: 'Contact Us',
          link: '/contact-us',
          active: pathParam === '/contact-us',
        },
      ],
    },
    {
      name: 'Profile',
      link: '/client/profile',
      active: pathParam === '/client/profile',
    },
    {
      name: 'My Learning',
      link: '/client/my-courses',
      active: pathParam === '/client//my-courses',
    },
    {
      name: 'Logout',
      link: '/logout',
      active: pathParam === '/logout',
    },
  ];

  const authAdminLinks = [
    {
      name: 'Home',
      link: '/',
      active: pathParam === '/',
    },
    {
      name: 'Courses',
      link: '/courses',
      active: pathParam === '/courses',
    },
    {
      name: 'About Us',
      link: '/about-us',
      active: pathParam === '/about',
      children: [
        {
          name: 'About UNGCNB',
          link: '/about-us',
          active: pathParam === '/about-us',
        },
        {
          name: 'Our Team',
          link: '/about-us#team',
          active: pathParam === '/about-us#team',
        },
        {
          name: 'Contact Us',
          link: '/contact-us',
          active: pathParam === '/contact-us',
        },
      ],
    },
    {
      name: 'Dashboard',
      link: '/admin/dashboard',
      active: pathParam === '/admin/dashboard',
    },
    {
      name: 'Logout',
      link: '/logout',
      active: pathParam === '/logout',
    },
  ];

  let authLinks;

  if (userDetails?.data?.role === userRoles.client.role) {
    authLinks = authCustomerLinks;
  } else if (allAdminRoles.includes(userDetails?.data?.role)) {
    authLinks = authAdminLinks;
  } else {
    authLinks = nonAuthLinks;
  }

  const links = userDetails ? authLinks : nonAuthLinks;

  const drawerRender = () => {
    return (
      <>
        {isShowMenu && (
          <Drawer title="" closeFunction={() => setIsShowMenu(false)}>
            <div className={styles.menu} onClick={() => setIsShowMenu(false)}>
              {links.map((link, i) => (
                <div key={i} className={styles.menuItem}>
                  <Link href={link.link} className={`${styles.menuLink} ${link.active ? styles.activeMenu : ''}`}>
                    {link.name}
                  </Link>
                  {link.children &&
                    link.children.map((child, j) => (
                      <Link key={j} href={child.link} className={`${styles.menuLink} ${child.active ? styles.activeMenu : ''}`}>
                        {child.name}
                      </Link>
                    ))}
                </div>
              ))}
            </div>
          </Drawer>
        )}
      </>
    );
  };

  return (
    <nav className={`${styles.navbar} ${scrolled && variant === 'transparent' ? styles.scrolled : ''} ${styles[variant]}`}>
      {drawerRender()}
      <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src={scrolled && variant === 'transparent' ? logoForDifferentVariants.scrolled : logoForDifferentVariants[variant]}
            alt="Logo"
            width={180}
            height={40}
            priority={true}
          />
        </Link>
      </div>
      <div className={styles.linkContainer}>
        {links.map((link, i) => (
          <div className={styles.linkSection} key={i}>
            <Link href={link.link} className={`${styles.link} ${link.active ? styles.active : ''}`}>
              {link.name}
            </Link>
            {/* dropdown section */}
            {link.children && (
              <div className={styles.dropdown}>
                {link.children.map((child, i) => (
                  <Link key={i} href={child.link} className={`${styles.link} ${child.active ? styles.active : ''}`}>
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <IoMenuSharp className={styles.menuIcon} onClick={() => setIsShowMenu(true)} />
      </div>
    </nav>
  );
}
