import React from 'react';
import styles from './infoSection.module.css';
import { LuMessagesSquare } from 'react-icons/lu';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { BsBoundingBoxCircles } from 'react-icons/bs';
export default function InfoSection() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <LuMessagesSquare className={styles.icon} />
        <h1>Have Questions? We are Here to Assist with Your Queries.</h1>
        <p>
          If you need help with our platform or services, our dedicated team is ready to provide clear guidance and support
          tailored to your needs.
        </p>
      </div>
      <div className={styles.container}>
        <HiOutlineDevicePhoneMobile className={styles.icon} />
        <h1>Join Forces to Drive Sustainable Growth Through Partnerships.</h1>
        <p>
          Collaborate with us to create innovative solutions for sustainability. Together, we can make a meaningful impact and
          build a better future for all.{' '}
        </p>
      </div>
      <div className={styles.container}>
        <BsBoundingBoxCircles className={styles.icon} />
        <h1>Your Feedback Inspires Us to Continuously Improve and Evolve.</h1>
        <p>
          We value your thoughts and ideas. Share your feedback to help us refine our platform and create a better experience for
          everyone committed to sustainability.{' '}
        </p>
      </div>
    </div>
  );
}
