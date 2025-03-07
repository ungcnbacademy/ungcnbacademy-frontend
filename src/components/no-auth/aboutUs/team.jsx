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
        <TeamCard image="/assets/about/team1.webp" name="Ms. Shahamin Zaman" role="EXECUTIVE DIRECTOR" />
        <TeamCard image="/assets/about/team2.webp" name="Mabrur M. Chowdhury" role="COUNTRY PROGRAMME MANAGER" />
        <TeamCard image="/assets/about/team3.webp" name="Juliana Lawson" role="COORDINATOR, STAKEHOLDER ENGAGEMENTS" />
        <TeamCard image="/assets/about/team4.webp" name="Nizam Uddin" role="FINANCE & ADMIN OFFICER" />
      </div>
    </div>
  );
}
