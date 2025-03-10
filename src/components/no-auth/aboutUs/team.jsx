import React from 'react';
import styles from './team.module.css';
import TeamCard from './teamCard';
export default function Team() {
  return (
    <div className={styles.main} id="team">
      <p className={styles.title}>OUR TEAM</p>
      <p className={styles.text}>
        We are a team of experts in international development, policy, pedagogy and content production, passionate about leading
        global education for sustainable development.
      </p>
      <div className={styles.cards}>
        <TeamCard image="/assets/about/team1.webp" name="Ms. Shahamin Zaman" role="Executive Director" />
        <TeamCard image="/assets/about/team2.webp" name="Mabrur M. Chowdhury" role="Country Program Manager" />
        <TeamCard image="/assets/about/team3.webp" name="Juliana Lawson" role="Coordinator, Stakeholder Engagement" />
        <TeamCard image="/assets/about/team4.webp" name="Nizam Uddin" role="Finance & Admin Officer" />
        <TeamCard image="/assets/about/team2.webp" name="Mabrur M. Chowdhury" role="Country Program Manager" />
        <TeamCard image="/assets/about/team3.webp" name="Juliana Lawson" role="Coordinator, Stakeholder Engagement" />
      </div>
    </div>
  );
}
