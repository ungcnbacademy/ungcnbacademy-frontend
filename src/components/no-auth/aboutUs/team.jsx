import React from 'react';
import styles from './team.module.css';
import TeamCard from './teamCard';
export default function Team() {
  return (
    <div className={styles.main} id="team">
      <p className={styles.title}>OUR TEAM</p>
      <p className={styles.text}>Meet the team behind the UN Global Compact Network Bangladesh (UNGCNB) Impact Academy.</p>
      <div className={styles.cards}>
        <TeamCard image="/assets/about/team1.webp" name="Shahamin S. Zaman" role="Executive Director" />
        <TeamCard image="/assets/about/team2.webp" name="Mabrur M. Chowdhury" role="Program Manager" />
        <TeamCard
          image="/assets/about/team3.webp"
          name="Juliana Lawson"
          role="Coordinator, Stakeholder Engagement & Partnerships"
        />
        {/* <TeamCard image="/assets/about/team4.webp" name="Nizam Uddin" role="Finance & Admin Officer" />
        <TeamCard image="/assets/about/team2.webp" name="Mabrur M. Chowdhury" role="Country Program Manager" />
        <TeamCard image="/assets/about/team3.webp" name="Juliana Lawson" role="Coordinator, Stakeholder Engagement" /> */}
      </div>
    </div>
  );
}
