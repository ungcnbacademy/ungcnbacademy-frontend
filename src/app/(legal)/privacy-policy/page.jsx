import { companyInfo } from '@/constants/constants';
import styles from './page.module.css';
import Header from '@/components/atom/header';
export const metadata = { title: 'Privacy Policy' };

const page = () => {
  return (
    <>
      <Header
        title={'Privacy Policy'}
        description={
          'The UNGCNB Academy represents the education and training portfolio of the UN Sustainable Development Solutions Network.'
        }
        image={'/assets/legal-bg.webp'}
      />
      <div className={styles.main}>
        <h2>Introduction</h2>
        <p>
          {companyInfo.companyName} is committed to protecting the privacy of our participants, event attendees, and website
          users. This privacy policy applies to all websites and mobile applications associated with {companyInfo.companyName}{' '}
          (each referred to as a "Site"). It outlines how we collect, use, store, disclose, and process personal information.
        </p>
        <br />
        <h2>Purpose of this Privacy Policy</h2>
        <p>
          This privacy policy explains how we handle personal information obtained through our Sites, including information
          provided through registrations, applications, event participation, content requests, and other engagements.
          <br /> <br />
          Our Sites are not intended for children under the age of 16. If we become aware that personal information from a child
          has been collected without parental consent, we will take steps to remove it from our servers.
        </p>
        <br />
        <h2>Who We Are?</h2>
        <p>
          This privacy policy is issued on behalf of {companyInfo.companyName} ("we," "us," or "our"). If you have any questions
          regarding this privacy policy or data processing activities, please contact us at{' '}
          <a className={styles.email} href={`mailto:${companyInfo.email}`}>
            {companyInfo.email}
          </a>
        </p>
        <br />
        <h2>Information We Collect</h2>
        <p>We collect personal information in the following ways:</p> <br />
        <ol>
          <li>
            <h3>Information You Provide to Us:</h3>
            <ul>
              <p>
                <br />
                <b>1. Contact Data: </b> Name, organization, job title, email, phone number, and postal address.
                <br />
                <b>2. Contact Data: </b>Passwords or security information for authentication and account access.
                <br />
                <b>3. Marketing Preferences: </b>Subscriptions and preferences for receiving communications.
                <br />
                <b>4. Event Data: </b>Participation details when registering for or attending events.
                <br />
                <b>5. Survey Responses: </b>Information provided through surveys or feedback forms.
                <br />
                <b>6. Billing Information: </b>Payment details for invoicing and transactions.
                <br />
                <b>7. Job Applications: </b>Employment history, qualifications, resumes, and interview responses.
                <br /> <br />
              </p>
            </ul>
          </li>
          <li>
            <h3>Information We Collect Automatically:</h3>
            <ul>
              <p>
                <br />
                <b>1. Technical Data: </b>IP addresses, browser type, device identifiers, and browsing patterns on our Sites.
                <br />
                <b>2. Cookies and Tracking Technologies: </b>Cookies help improve user experience by remembering preferences and
                tracking usage. For details, see our Cookie Notice.
              </p>
            </ul>
          </li>
        </ol>
        <br />
        <h2>How We Use Information</h2>
        <h3>We process personal information for the following purposes:</h3>
        <br />
        <p>
          1. Managing event registrations and participant interactions. <br />
          2. Facilitating online learning, self-assessments, and training programs. <br />
          3. Enhancing user experience through analytics and website improvements. <br />
          4. Processing payments and invoicing. <br />
          5. Ensuring compliance with legal and regulatory requirements. <br />
          6. Administering recruitment processes for employment opportunities. <br />
        </p>
        <br />
        <h2>How We Share Information</h2>
        <p>We may share personal information with:</p> <br />
        <p>
          <b>1. Global Compact Networks: </b> To facilitate local engagement and activities. <br />
          <b> 2. Third-Party Service Providers: </b> Including IT service providers, event organizers, payment processors, and
          professional consultants. <br />
          <b>3. Legal Authorities: </b> In response to legal obligations, court orders, or regulatory requests. <br />
          <b>4. Aggregated Data Users: </b> Non-identifiable data may be shared for research and reporting purposes. <br />
        </p>
        <br />
        <p>
          We ensure that third-party service providers maintain appropriate security measures and process data in compliance with
          applicable laws.
        </p>{' '}
        <br />
        <h2>Data Retention</h2>
        <p>
          We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply
          with legal obligations, resolve disputes, and enforce our agreements.
        </p>
        <br />
        <h2>Security Measures</h2>
        <p>
          We implement technical, physical, and administrative security measures to safeguard personal information. However, while
          we strive to protect data, no transmission over the internet is completely secure.
        </p>
        <br />
        <h2>Third-Party Links</h2>
        <p>
          Our Sites may contain links to external websites not governed by this privacy policy. We are not responsible for their
          privacy practices and encourage users to review third-party privacy policies before providing personal information.
        </p>
        <br />
        <h2>International Data Transfers</h2>
        <p>
          Personal information may be transferred to and processed in countries outside your location, including regions with
          different data protection laws. We ensure appropriate safeguards for international data transfers.
        </p>{' '}
        <br />
        <h2>Rights of European Residents</h2>
        <p>
          If you are in the European Economic Area (EEA) or the United Kingdom, you have rights under data protection laws,
          including: <br /> <br />
          1. Accessing personal information we hold about you. <br />
          2. Requesting corrections to inaccurate data. <br />
          3. Requesting data deletion where applicable. <br />
          4. Objecting to or restricting data processing. <br />
          5. Data portability for transferring personal data. <br />
          6. To exercise these rights, contact{' '}
          <a className={styles.email} href={`mailto:info@unglobalcompact.org`}>
            info@unglobalcompact.org
          </a>{' '}
          <br />
        </p>
        <br />
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy periodically. Changes will be posted on our Sites with the updated effective date.
        </p>
        <br />
        <h2>Contact Us</h2>
        <p>
          For questions or concerns regarding this privacy policy, contact us at{' '}
          <a className={styles.email} href={`mailto:${companyInfo.email}`}>
            {companyInfo.email}
          </a>{' '}
          .
        </p>
      </div>
    </>
  );
};

export default page;
