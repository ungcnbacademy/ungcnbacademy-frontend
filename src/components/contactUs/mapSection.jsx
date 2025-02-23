'use client';
import React from 'react';
import styles from './mapSection.module.css';
import { companyInfo } from '@/constants/constants';
import { FaFacebookSquare } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';

import { IoCallSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

export default function MapSection() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1 className={styles.title}>
          <span> Contact </span>us
        </h1>
        <div className={styles.contactInfo}>
          <a href={`tel:${companyInfo.phone}`}>
            <div className={styles.phoneContainer}>
              <IoCallSharp className={styles.icon} />
              <span>{companyInfo.phone}</span>
            </div>
          </a>
          <a href={`mailto:${companyInfo.email}`}>
            <div className={styles.emailContainer}>
              <MdEmail className={styles.icon} />
              <span>{companyInfo.email}</span>
            </div>
          </a>
          <a href={companyInfo.googleMapAddress} target="_blank">
            <div className={styles.addressContainer}>
              <FaLocationDot className={styles.icon} />
              <span>{companyInfo.address}</span>
            </div>
          </a>
        </div>

        <h2 className={styles.socialTitle}>Follow us on</h2>

        <div className={styles.social}>
          <FaFacebookSquare className={styles.icon} onClick={() => window.open(companyInfo.socials.facebook)} />
          <IoLogoYoutube className={styles.icon} onClick={() => window.open(companyInfo.socials.youtube)} />
          <RiInstagramFill className={styles.icon} onClick={() => window.open(companyInfo.socials.instagram)} />
        </div>
        <p className={styles.text}>
          We are here to connect, collaborate, and support your journey toward a sustainable future. Whether you have questions
          about our platform, are interested in partnering with us, or simply want to share your thoughts, we would love to hear
          from you. Our team is dedicated to providing prompt and helpful responses to ensure you have the best experience.
          Together, we can create meaningful impact and drive positive change. Do not hesitate to reach out—we are just a message
          away!
        </p>
      </div>
      <div className={styles.right}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.78155824236!2d90.4251343!3d23.790791799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700057bae11%3A0xb1dc187232bc98b6!2sESG%20Institute%20Bangladesh!5e0!3m2!1sen!2sth!4v1739810606121!5m2!1sen!2sth"
            className={styles.map}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
