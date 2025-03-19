import React from 'react';
import styles from './info.module.css';
import { companyInfo } from '@/constants/constants';
export default function Info() {
  return (
    <div className={styles.main}>
      <p className={styles.text}>
        The <span>{companyInfo.name}</span> is a dedicated learning platform designed to empower businesses, professionals, and
        stakeholders with the knowledge and skills needed to drive sustainable change. As an initiative of the{' '}
        <span> Global Compact Network Bangladesh (GCNB)</span>, the academy supports the advancement of the{' '}
        <span>
          {' '}
          Ten Principles of the United Nations Global Compact, the United Nations Sustainable Development Goals (SDGs) and ESG
          Principles{' '}
        </span>{' '}
        through capacity-building programs, training sessions, and expert-led discussions.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        Since its inception, <span>{companyInfo.name}</span> has played a crucial role in fostering corporate responsibility by
        providing actionable insights into{' '}
        <span> human rights, labor standards, environmental sustainability, good governance and ethical business practices.</span>{' '}
        Through structured learning modules, industry best practices, and real-world case studies, the academy equips individuals
        and organizations with the tools to integrate sustainability into their core strategies.
      </p>
      <br />
      <br />
      <p className={styles.text}>
        In today's rapidly evolving world, tackling sustainability challenges requires skilled professionals who can drive
        responsible business practices and environmental stewardship. The <span>{companyInfo.name}</span> is committed to
        equipping individuals with the{' '}
        <span>
          knowledge, tools, and strategies needed to advance the UN Global Compact principles, ESG frameworks, and sustainable
          development goals.
        </span>{' '}
        Through specialized programs and capacity-building initiatives, we empower businesses and stakeholders to integrate
        sustainability into their core operations, ensuring long-term positive impact on business, society and the environment.
      </p>
      <div className={styles.section}>
        <div className={styles.overlay}>
          <p className={styles.text1}>
            By bridging knowledge gaps and promoting multi-stakeholder collaboration, the <span>{companyInfo.name}</span> serves as a catalyst for
            sustainable development—helping businesses align their operations with global sustainability standards while making a
            positive impact on society.
       
            <br />
            Join us in shaping a future where businesses lead with purpose and responsibility.
          </p>
        </div>
      </div>
    </div>
  );
}
