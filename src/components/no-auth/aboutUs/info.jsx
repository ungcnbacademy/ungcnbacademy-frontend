import React from 'react';
import styles from './info.module.css';
import { companyInfo } from '@/constants/constants';
export default function Info() {
  return (
    <div className={styles.main}>
      <p className={styles.text}>
        The <span className={styles.span}>{companyInfo.name}</span> is a dedicated learning platform designed to empower
        businesses, professionals, and stakeholders with the knowledge and skills needed to drive sustainable change. As an
        initiative of the <span className={styles.span}>Global Compact Network Bangladesh (GCNB)</span>, the academy supports the
        advancement of <span className={styles.span}>the Ten Principles of the UN Global Compact </span> and the{' '}
        <span className={styles.span}> United Nations Sustainable Development Goals (SDGs)</span> through capacity-building
        programs, training sessions, and expert-led discussions.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        Since its inception, <span className={styles.span}>{companyInfo.name}</span> has played a crucial role in fostering
        corporate responsibility by providing insights into{' '}
        <span className={styles.span}>
          human rights, labor standards, environmental sustainability, and ethical business practices.
        </span>{' '}
        Through structured learning modules, industry best practices, and real-world case studies, the academy equips individuals
        and organizations with the tools to integrate sustainability into their core strategies.
      </p>
      <div className={styles.section}>
        <div className={styles.overlay}>
          <p className={styles.text1}>
            By bridging knowledge gaps and promoting multi-stakeholder collaboration,
            <span className={styles.span}> {companyInfo.name}</span> serves as a catalyst for sustainable development—helping
            businesses align their operations with global sustainability standards while making a positive impact on society.
          </p>
          <p className={styles.text1}>Join us in shaping a future where businesses lead with purpose and responsibility.</p>
        </div>
      </div>
    </div>
  );
}
