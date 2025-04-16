'use client';
import React from 'react';
import styles from './footer.module.css';
import { legalMenu, MainMenu, serviceMenu } from '@/constants/menuList';
import Link from 'next/link';
import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { companyInfo } from '@/constants/constants';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.card}>
          <Image src={'/logo.svg'} alt="Logo" width={130} height={60} className={styles.logo} />
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>Learn more</h2>
          <ul>
            {MainMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>Support</h2>
          <ul>
            {legalMenu.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.card}>
          <h2 className={styles.title}>Get in touch</h2>
          <ul>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
          <div className={styles.contactInfo}>
            <a href={`tel:${companyInfo.phone}`}>
              <div className={styles.phoneContainer}>
                <IoCallSharp className={styles.icon} />
                <span className={styles.span}>{companyInfo.phone}</span>
              </div>
            </a>
            <a href={`mailto:${companyInfo.email}`}>
              <div className={styles.emailContainer}>
                <MdEmail className={styles.icon} />
                <span className={styles.span}>{companyInfo.email}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <p className={styles.text}>An initiative for sustainable education</p>
          <Image src={'/ungc.png'} alt="Logo" width={200} height={50} className={styles.ungcLogo} />
        </div>
        <div className={styles.middle}>
          <p className={styles.text}>
            Knowledge <br /> partner
          </p>
          <Image src={'/esg-logo.png'} alt="Logo" width={200} height={50} className={styles.esgLogo} />
        </div>
        <div className={styles.right}>
          <p className={styles.text}>
            Follow our <br /> social media
          </p>
          <div className={styles.social}>
            <FaFacebookSquare className={styles.icon} onClick={() => window.open(companyInfo.socials.facebook)} />
            <FaSquareXTwitter className={styles.icon} onClick={() => window.open(companyInfo.socials.twitter)} />
            <FaLinkedin className={styles.icon} onClick={() => window.open(companyInfo.socials.linkedin)} />
          </div>
        </div>
      </div>

      <div className={styles.paymentContainer}>
        <Image src={'/assets/payment/ssl.png'} alt="paymentBanner" width={1000} height={117} className={styles.sslBanner} />
      </div>

      <div>
        <p className={styles.copyright}>
          Copyright &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
