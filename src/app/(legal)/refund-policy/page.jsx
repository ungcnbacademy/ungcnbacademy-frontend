import { companyInfo } from '@/constants/constants';
import styles from './page.module.css';
import Header from '@/components/atom/header';
export const metadata = { title: 'Privacy Policy' };

const page = () => {
  return (
    <>
      <Header
        title={'Refund Policy'}
        description={
          'The UNGCNB Academy represents the education and training portfolio of the UN Sustainable Development Solutions Network.'
        }
        image={'/assets/legal-bg.webp'}
      />
      <div className={styles.main}>
        <h2>Introduction</h2>
        <p>
          {companyInfo.companyName} is committed to ensuring a positive experience for all participants in our education and
          training programs. This Refund Policy outlines the circumstances under which refunds are granted and the process for
          requesting them.{' '}
        </p>
        <br />
        <h2>Eligibility for Refunds</h2>
        <p>Refunds may be considered under the following circumstances: </p>
        <br />

            <h3>Information You Provide to Us:</h3>
            <ul>
              <p>
                <br />
                <b>1. Cancellation of Enrollment: </b> If you withdraw from a program or event before the commencement date.
                <br />
                <b>2. Technical Issues: </b>If technical problems caused by us prevent access to our courses, programs, or
                services. <br />
                <b>3. Duplicate Payments: </b>In cases where a payment has been made twice for the same program or service.
                <br /> <br />
              </p>
            </ul>

        <h2>Refund Requests</h2>
        <h3>To request a refund, you must:</h3>
        <br />
        <p>
          1. Submit a written request via email to <a className={styles.email} href={`mailto:${companyInfo.email}`}>
            {companyInfo.email}
          </a>. <br />
          2. Include your full name, email address, payment details, and reason for requesting a refund. <br />
          3. Provide proof of payment, such as a receipt or transaction confirmation. <br />
        </p>
        <br />
        <h2>Refund Timeline</h2>
        <p>Once your refund request is approved, the processing time will be as follows:</p> <br />
        <p>
          1. Refunds will be processed within 7 to 10 working days. <br />
          2. The amount will be credited back to the original payment method used during the transaction.
        </p>
        <br />
        <h2>Non-Refundable Circumstances</h2>
        <p>Refunds will not be issued under the following conditions:</p> <br />
        <ul>
          <li>For partial completion of programs or courses.</li>
          <li>If program deadlines or event attendance criteria are missed due to personal reasons.</li>
          <li>For services or programs explicitly marked as non-refundable.</li>
        </ul>
        <br />
        <h2>Changes to Refund Policy</h2>
        <p>
          Our Sites may contain links to external websites not governed by this privacy policy. We are not responsible for their
          privacy practices and encourage users to review third-party privacy policies before providing personal information.
        </p>
        <br />
        {companyInfo.companyName} reserves the right to amend this Refund Policy at any time. Updates will be posted on our
        website with the revised effective date.
        <br />
        <br />
        <p>For additional assistance, contact us at <a className={styles.email} href={`mailto:${companyInfo.email}`}>
            {companyInfo.email}
          </a>.</p>
      </div>
    </>
  );
};

export default page;
