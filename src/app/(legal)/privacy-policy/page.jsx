import { companyInfo } from "@/constants/constants";
import styles from "./page.module.css";
export const metadata = { title: 'Privacy Policy' };

const page = () => {
  return (
    <div className={styles.main}>
      <h2>WHAT IS THE PRIVACY POLICY?</h2>
      <div className={styles.date}>
        <p>Last updated: April 22, 2024</p>
      </div>
      <div className={styles.container}>
        <h3>PRIVACY POLICY</h3>
        <p>
          {companyInfo.companyName} has recently updated its privacy policy to clarify our
          personal information practices in the UK. Residents of UK may have
          additional personal information rights and notices.
        </p>
        <br />
        <h3>Introduction and Scope of this Privacy Policy</h3>
        <p>
          This Privacy Policy (the &apos;Policy&apos;) describes how {companyInfo.companyName} UK,
          Inc. (&apos;{companyInfo.companyName}&apos; or &apos;we&apos;, &apos;us&apos;, or
          &apos;our&apos;) collects, uses, and discloses personal information.
          This Policy applies to those {companyInfo.companyName} UK websites and applications that
          display or link to this Policy (referred to in this Policy as the
          &apos;Website&apos;). This Policy also applies to other UK services,
          including retail stores, that display or link to these terms. It does
          not apply to those {companyInfo.companyName} sites, services and products that have
          their own privacy policies. This privacy policy outlines the
          following:
        </p>
        <div className={styles.questions}>
          <ol>
            <li>
              <a href="#section1">
                What Personal Information Do We Collect?
              </a>
            </li>
            <li>
              <a href="#section2">
                From Where Do We Collect Personal Information?
              </a>
            </li>
            <li>
              <a href="#section3">
                How Do We Use Your Personal Information?
              </a>
            </li>
            <li>
              <a href="#section4">
                How Do We Use Cookies and Other Tracking Technologies?
              </a>
            </li>
            <li>
              <a href="#section5">
                How Do We Disclose Your Personal Information?
              </a>
            </li>
            <li>
              <a href="#section6">
                How Can You Exercise Your Privacy Rights and Choices?
              </a>
            </li>
            <li>
              <a href="#section7">
                How Can You Contact {companyInfo.companyName} About Privacy Questions?
              </a>
            </li>
            <li>
              <a href="#section8">
                Other Privacy, Security and Legal Information.
              </a>
            </li>
            {/* <li>Changes to this Policy.</li>
          <li>Additional Information for Specific Kingdom.</li> */}
          </ol>
        </div>
        <div className={styles.section} id="section1">
          <h3>1. What Personal Information Do We Collect?</h3>

          <br />
          <p className={styles.para}>IDENTITY AND CONTACT INFORMATION</p>
          <p>
            Information that identifies you. Examples: name, date of birth,
            e-mail address, phone number, shipping and billing address, customer
            ID, adiClub membership ID, social media identifiers and handles,
            your device fingerprint (including your browser fingerprint) and any
            other communication channel you have used to contact us.
          </p>

          <br />
          <p className={styles.para}>PAYMENT AND PURCHASE INFORMATION</p>
          <p>
            Information related to your purchases. Examples: payment methods,
            fraud risk analysis, shopping cart details, delivery details,
            shipping and billing address, order ID, purchase history and retail
            store.
          </p>

          <br />
          <p className={styles.para}>USAGE INFORMATION</p>
          <p>
            Information on your browsing and Website behaviorand interactions
            with our marketing emails. Examples: browser name, IP address,
            timing of site visits, pages visited, clicked links in our marketing
            emails, the referral URL that brought you to our Website and
            information about traffic patterns and site usage, such as
            clickstream data comprised of mouse movements, clicks, page scrolls
            and keystrokes.
          </p>

          <br />
          <p className={styles.para}>BODY MEASUREMENTS</p>
          <p>
            Information we can use to make sure your gear fits. Examples: shoe
            and apparel size, height, weight, chest, waist, hip, inseam, body
            shape and heel-toe measurement.
          </p>

          <br />
          <p className={styles.para}>LOCATION</p>
          <p>
            Information that indicates, directly or indirectly, where you are,
            real time or otherwise, for example, if you use our {companyInfo.companyName} Running
            app or if you participate in certain hype events. Examples: current
            log-in location (IP address), real-time device location information
            via device signals (if your device settings allow us to collect that
            information).
          </p>

          <br />
          <p className={styles.para}>MEMBERSHIP AND DEMOGRAPHIC INFORMATION</p>
          <p>
            Information related to your adiClub membership and registration.
            Examples: gender, age, acquisition source ID (where you signed up to
            our membership), membership points, engagement history, rewards
            history and social media identifiers if you choose to log in to your
            account via a third-party social media account.
          </p>

          <br />
          <p className={styles.para}>INFERENCES, BEHAVIORS, AND PREFERENCES</p>
          <p>
            Information that indicates your preferences and opinions, whether
            that information is provided directly by you or inferred by us.
            Examples: activity preference (sports), exercise plans, product
            preferences, shopping history, wish list items, any
            &apos;preference&apos; details you provide to us in your profile
            (such as &apos;women&apos;s products&apos;, &apos;men&apos;s
            products&apos;, etc), information you provide when you interact with
            our communities (in person or online via chats, bulletin boards,
            etc.) or provide feedback through product reviews, surveys, focus
            groups and product testing.
          </p>

          <br />
          <p className={styles.para}>DEVICE INFORMATION</p>
          <p>
            Information related to the device you use to access our Website.
            Examples: device ID, device fingerprint and operating system.
          </p>

          <br />
          <p className={styles.para}>SOCIAL MEDIA INTERACTIONS</p>
          <p>
            Information about you we obtain through different social media
            channels such as Facebook, Instagram, Google, etc., when we use
            these channels for consumer engagement, advertising, sales, or
            analytics purposes or to enrich your customer profile with {companyInfo.companyName}.
            Examples: publicly available social media information, and photos
            and posts you send to us by mentioning us or following our social
            media posts by using &apos;handles&apos; or &apos;hashtags.&apos;
          </p>

          <br />
          <p className={styles.para}>CORRESPONDENCE/ CHATS</p>
          <p>
            Information related to your interactions with our customer service
            chat function on the Website, customer service teams, and/or our
            employees and personnel. Examples: written correspondence with us
            (such as emails or messages to the chat function) and phone calls.
          </p>

          <br />
          <p className={styles.para}>IMAGES AND RECORDINGS</p>
          <p>
            Image, voice, and video recordings we have captured or obtained
            where you may be identified. Examples: photos and videos taken in
            our retail stores, at events, in focus groups, in CCTV footage, in
            customer service call recordings and through images you share with
            us via social media. We may also collect scans, videos and images if
            you choose to participate in certain research projects with us.
          </p>

          <br />
          <p className={styles.para}>FITNESS ACTIVITY</p>
          <p>
            Information connected to your fitness activity, if you choose to
            track this activity using our Website (including {companyInfo.companyName} Running and
            Training). Examples: activity type, distance, exercise duration,
            fitness score, pace and speed.
          </p>
        </div>
        <div className={styles.section} id="section2">
          <h3>2. From Where Do We Collect Personal Information?</h3>

          <br />
          <p className={styles.para}>FROM YOU</p>
          <p>We collect Personal Information you provide to us. Examples:</p>
          <ul>
            <li>If you register for adiClub membership</li>
            <li>If you make a purchase</li>
            <li>
              If you contact our customer service team, including through chat
              or by phone.
            </li>
            <li>
              If you participate in a contest or sweepstakes, respond to a
              survey or register for an event.
            </li>
          </ul>

          <br />
          <p className={styles.para}>FROM THIRD PARTIES</p>
          <p>We receive information about you from third parties. Examples:</p>
          <ul>
            <li>Our affiliate companies in the {companyInfo.companyName} Group.</li>
            <li>
              Our service providers, contractors and vendors (such as
              advertising networks, fraud prevention companies and analytics
              companies).
            </li>
            <li>
              Online platforms and social media networks you use to interact
              with our ads, to interact with our influencers, or to log into
              your {companyInfo.companyName} account and shop for our products.
            </li>
            <li>
              Business partners who have your permission to share your data with
              us. For example, if we co-host events or contests with certain
              sports entities or if we have co-branded websites.
            </li>
          </ul>

          <br />
          <p className={styles.para}>AUTOMATICALLY</p>
          <ul>
            <li>
              We gather certain information automatically when you visit our
              Website (including apps) or interact with our ads and emails via
              cookies, pixels, web beacons, SDKs, and other tracking
              technologies. For details about what we collect and how we use
              this information, see the &apos;Usage Information&apos; and
              &apos;How Do We Use Cookies and Other Tracking Technologies?&apos;
              sections.
            </li>
            <li>
              We may record you on video through our CCTV when you visit our
              stores.
            </li>
          </ul>
        </div>
        <div className={styles.section} id="section3">
          <h3> 3. How Do We Use Your Personal Information?</h3>

          <p>
            We may use your personal information to, for example, provide the
            products you have ordered, advertise to you, provide customer
            service, improve Website functionality and user experience, improve
            our products and services and personalize the Website, our
            communications with you, and your shopping experience. Please see
            below for details.
          </p>

          <br />
          <p className={styles.para}>OPERATE THE WEBSITE</p>
          <ul>
            <li>
              Authenticate users across all participating {companyInfo.companyName} platforms
              globally.
            </li>
            <li>
              Implement persistent login. If persistent log-in is enabled, basic
              profile information like e-mail, first name, last name and a
              unique account identifier will be stored for up to 30 days in the
              browser that was used for the login. Please note: To protect your
              personal data, do not enable persistent log-in on a publicly
              accessible device.
            </li>
            <li>
              Improve the functionality of the Website, and debug, identify and
              repair errors that impair the intended functionality of the
              Website.
            </li>
            <li>Monitor compliance with our terms and conditions.</li>
            <li>
              Detect and prevent security threats to our domain and our consumer
              accounts.
            </li>
          </ul>

          <br />
          <p className={styles.para}>IMPROVE YOUR SHOPPING EXPERIENCE</p>

          <ul>
            <li>
              Identify correct sizing and display items of interest based on
              prior interactions.
            </li>
            <li>Encourage and enable purchases.</li>
          </ul>

          <br />
          <p className={styles.para}>SELL AND DELIVER PRODUCTS</p>
          <ul>
            <li>
              Process orders, provide payment options, deliver and track orders,
              provide exchanges and refunds.
            </li>
          </ul>

          <br />
          <p className={styles.para}>DETECT FRAUD</p>
          <ul>
            <li>
              Detect and investigate fraudulent activities using our fraud
              detection solutions. We combine information you provide to us,
              information we collect automatically when you interact with our
              Website, and other information we obtain through our third-party
              payment risk and fraud prevention providers to help ensure your
              purchases, exchanges and returns are legitimate and comply with
              our terms and conditions.
            </li>
            <li>Detect and investigate security incidents.</li>
          </ul>

          <br />
          <p className={styles.para}>PROVIDE CUSTOMER SERVICE</p>
          <ul>
            <li>
              Answer your questions through various communication channels
              (including chat and phone). Use recorded customer service phone
              conversations and stored chat transcripts for quality assurance,
              training, trouble shooting and other business purposes.
            </li>
            <li>
              Evaluate our customer service and customer service channels to
              improve their quality and functionality.
            </li>
          </ul>

          <br />
          <p className={styles.para}>
            DISPLAY TARGETED ADS AND SEND CUSTOMIZED MARKETING MESSAGES AND
            NOTIFICATIONS
          </p>
          <ul>
            <li>
              Send you personalized marketing messages via email or (if you have
              our app) push notifications based on our information about you,
              your interests and your interactions with us. You can unsubscribe
              from marketing emails and adjust your device settings to disallow
              push notifications (please see the &apos;How Can You Exercise Your
              Privacy Rights and Choices?&apos; section below).
            </li>
            <li>
              Show you targeted ads on third-party websites and advertising
              platforms such as Facebook, Google, YouTube, Instagram, etc.
              (please see the &apos;How Can You Exercise Your Privacy Rights and
              Choices?&apos; section below).
            </li>
            <li>Notify you when an item is back in stock.</li>
          </ul>

          <br />
          <p className={styles.para}>
            ANALYZE AND PROMOTE USER GENERATED CONTENT FROM SOCIAL MEDIA
          </p>
          <ul>
            <li>
              We invite you to provide your images to us via social media
              platforms by following specific instructions such as
              &apos;#yesraveeda&apos;. We may use the images you provide for our
              campaign communications under a license agreement in our terms and
              conditions, which you should read and agree to prior to providing
              us with such images
              (https://www.{companyInfo.companyName}.co.uk/help/uk-company-information/what-is-yesraveeda).
            </li>
          </ul>

          <br />
          <p className={styles.para}>
            ADMINISTER THE ADICLUB MEMBERSHIP PROGRAM
          </p>
          <ul>
            <li>
              Administer your raveedaClub levels, points, challenges and rewards
              and send you messages about the same.
            </li>
            <li>
              Store your shipping address and certain payment details to shorten
              check-out time.
            </li>
            <li>
              Provide adiClub members with access to the {companyInfo.companyName} running and
              training app.
            </li>
          </ul>

          <br />
          <p className={styles.para}>CREATE PROFILES</p>
          <ul>
            <li>
              We may combine the information we collect about you from different
              sources to create a profile about you and to infer your interests,
              preferences, shopping habits and other behaviors.
            </li>
            <li>
              We may also use your information to create a profile for
              fraud-prevention and investigation purposes.
            </li>
          </ul>

          <br />
          <p className={styles.para}>
            ADMINISTER SWEEPSTAKES, CONTESTS AND OTHER ACTIVITIES
          </p>
          <ul>
            <li>
              Administer sign-ups for events we organize and keep you informed
              of events you may enjoy.
            </li>
            <li>
              Verify eligibility for sweepstakes or contests, contact winners
              and administer prizes and fulfill related legal matters. For
              example, if you participate in a contest or sweepstakes relating
              to the raveedaClub or our Website, we may collect the following
              information to administer the sweepstakes: your contact
              information, your product size information, your preferences, your
              location, information associated with your raveedaClub membership
              and other information you provide to us. When we run a contest or
              sweepstakes relating to our Website, it will be accompanied by a
              set of rules. The rules for each contest/sweepstakes will specify
              how the information gathered from you for entry will be used and
              disclosed, if it is different than as described in this Policy.
              Personal information will be collected in a contest or sweepstakes
              only if you voluntarily submit it to our sponsors or us.
            </li>
          </ul>

          <br />
          <p className={styles.para}>IMPROVE OUR PRODUCTS AND SERVICES</p>
          <ul>
            <li>
              Collect and review analytics about the Website, from social media
              platforms and our business to understand how our products are
              selling, identify popular product features, analyze our marketing
              and advertising campaigns, our product designs and distribution
              strategy, our Website design and overall user experience.
            </li>
            <li>
              We also analyze survey, product testing and focus group
              results,videos and feedback to help us improve our products,
              services and marketing efforts.
            </li>
            <li>
              We may ask our service providers to conduct market and product
              research for us.
            </li>
          </ul>

          <br />
          <p className={styles.para}>
            COMPLY WITH LEGAL AND SAFETY OBLIGATIONS
          </p>
          <ul>
            <li>
              We may access and use your personal information, including the
              content of your communications, in order to: (a) comply with the
              law or respond to lawful requests or legal process; (b) protect
              the rights or property of {companyInfo.companyName} or our customers, including the
              enforcement of our agreements or policies governing your use of
              our Websites and services; or (c) to protect the personal safety
              of {companyInfo.companyName} employees, customers or the public.
            </li>
            <li>
              We may need to keep some personal information as evidence in case
              of a dispute, complaint or audit.
            </li>
          </ul>

          <br />
          <p className={styles.para}>OTHER BUSINESS PURPOSES</p>
          <ul>
            <li>
              We may collect CCTV video in {companyInfo.companyName} stores to limit fraud and
              investigate crimes.
            </li>
            <li>
              We use Usage Information to detect and investigate fraud and to
              provide statistical information in aggregated form to our partners
              and other third parties about how our users collectively use the
              Website.
            </li>
          </ul>
        </div>
        <div className={styles.section} id="section4">
          <h3>4. How Do We Use Cookies and Other Tracking Technologies?</h3>

          <br />
          <p>
            Like many websites, we use cookies, tags, pixels, beacons and other
            tracking technologies (collectively referred to as
            &apos;Cookies&apos;). Cookies are files stored on your
            computer&apos;s hard drive by your browser to enable the Website to
            remember you, your actions and preferences (such as login, language,
            font size and other display preferences) over a period of time. This
            allows us to optimize the shopping experience, hold selections in a
            shopping cart when a user leaves the Website without checking out
            and send you reminder e-mail about your shopping orders and other
            shopping opportunities. We also use Cookies to gather statistical
            information about use of the Website in order to improve its design
            and functionality, understand how the Website is used, and assist us
            with resolving questions.
          </p>

          <br />
          <p>
            We use third party analytics service providers, including Google
            Analytics and Google AdWords on the Website to collect Usage
            Information, to analyze how users use the Website—such as time spent
            on the website, pages visited, cart details, mouse clicks,
            keystrokes, purchases, and other interactions—and to provide
            advertisements to you on other websites. You can learn about
            Google&apos;s practices by going
            towww.google.com/policies/privacy/partners/, and exercise the
            opt-out provided by Google by downloading the Google Analytics
            opt-out browser add-on, available
            athttps://tools.google.com/dlpage/gaoptout/.
          </p>

          <br />
          <p>
            Cookies also allow us to select which of our advertisements or
            offers are most likely to appeal to you and display them while you
            are on the Website. We may also use Cookies or other technologies in
            online advertising to track responses to our ads. We use third-party
            companies to measure and target ads on our behalf about products and
            services tailored to your interests. Most browsers accept Cookies
            automatically but allow you to disable them or be given the choice
            of declining or accepting a particular Cookie (or Cookies) from a
            particular website. You may also visit www.aboutads.info/choices/
            and http://optout.networkadvertising.org/#/. In addition, if you
            prefer to opt out of having your information used for cookie-based
            ad targeting activities and you reside in certain states, you can
            visit the &apos;Your Privacy Choices&apos; link at the bottom of our
            websites. And, if you are on an {companyInfo.companyName} app, you can opt out by
            clicking the settings icon and going to &apos;Manage Account&apos;
            under &apos;App Settings.&apos;
          </p>
        </div>
        <div className={styles.section} id="section5">
          <h3>5. How Do We Disclose Your Personal Information?</h3>
          <p>
            Except as described in this Policy, we will not disclose your
            personal information outside of {companyInfo.companyName} and the {companyInfo.companyName} Group
            without your consent.
          </p>

          <br />
          <p className={styles.para}>{companyInfo.companyName} GROUP</p>
          <p>
            We disclose your data to our affiliates (described in
            http://www.{companyInfo.companyName}.co.uk). This helps us implement our global single
            sign-on and other centralized functions.
          </p>

          <br />
          <p className={styles.para}>BUSINESS PARTNERS</p>
          <p>
            We disclose personal information to select business partners with
            your consent or at your direction (for example, if you allow them to
            contact you about their products, services or offers).
          </p>

          <br />
          <p className={styles.para}>CO-BRANDED SITES</p>
          <p>
            Some {companyInfo.companyName} services are co-branded by {companyInfo.companyName} and another company,
            with the privacy policies of both {companyInfo.companyName} and the other company
            displayed on the website. The information you provide, such as on
            registration forms, is collected by both {companyInfo.companyName} and the other
            company, subject to both privacy policies.
          </p>

          <br />
          <p className={styles.para}>
            SERVICE PROVIDERS, CONTRACTORS AND VENDORS
          </p>
          <p>
            We hire other companies to provide services to us or on our behalf,
            such as marketing, web analytics, chat support and functionality
            (including through conversational artificial intelligence), data
            analysis, credit card processing, shipping, stocking orders,
            providing customer service and fraud protection.
          </p>

          <br />
          <p>
            These providers have access only to such personal information as
            appropriate to perform their functions and are contractually
            obligated to maintain the confidentiality and security of your
            information. They are subject to appropriate contractual
            restrictions on how they use this information. Examples:
          </p>
          <ul>
            <li>
              We disclose most of your data with cloud service and other
              technical and platform service providers.
            </li>
            <li>
              We disclose your Payment and Purchase Information, Usage
              Information and other data to our fraud prevention providers and
              data analytics providers.
            </li>
            <li>
              Additionally, we disclose chat transcripts to our chat service
              provider for storage, customer service, and limited
              troubleshooting (as needed), otherwise your chat conversations are
              processed, disclosed, and retained solely for our own operational
              business purposes, such as training and further customer support.
            </li>
          </ul>

          <br />
          <p className={styles.para}>GOVERNMENT, COURTS AND LAW ENFORCEMENT</p>
          <p>
            We may disclose information about you to these parties to comply
            with legal and safety obligations as described above.
          </p>

          <br />
          <p className={styles.para}>MERGER/ SALE ENTITIES</p>
          <p>
            We may disclose personal information as part of a corporate
            transaction such as a merger or a sale of assets.
          </p>

          <br />
          <p className={styles.para}>CONTENT YOU POST</p>
          <p>
            In addition, any information you decide to post to public areas of
            the Website, such as message boards and feedback sections, becomes
            publicly available.
          </p>
        </div>
        <div className={styles.section} id="section6">
          <h3>6. How Can You Exercise Your Privacy Rights and Choices?</h3>

          <br />
          <p className={styles.para}>UPDATING YOUR ACCOUNT INFORMATION</p>
          <p>
            You can review and modify your raveedaClub account information at
            any time by signing into your online account. You can also update
            your account information by calling Customer Service at
            1-800-982-9337.
          </p>

          <br />
          <p className={styles.para}>OPTING OUT OF MARKETING COMMUNICATIONS</p>
          <p>
            We provide you with several opportunities to opt-out of receiving
            our promotional communications and newsletters, including:
          </p>
          <ul>
            <li>
              If you have an raveedaClub membership, sign in online, go to your
              account page, go to Account Overview, go to Preferences, then
              uncheck the Newsletter checkbox; or
            </li>
            <li>
              When you get a marketing email, click the &apos;unsubscribe&apos;
              button at the bottom of the email; or
            </li>
            <li>
              For any other promotional communications, use the opt-out
              instructions contained in that communication.
            </li>
          </ul>

          <br />
          <p>
            If you opt out, we may still send you non-promotional messages, such
            as those about your raveedaClub membership or our ongoing business
            relations.
          </p>

          <br />
          <p className={styles.para}>
            ACCESS, DELETE AND CORRECT INFORMATION WE HAVE ABOUT YOU
          </p>
          <p>
            Depending on where you reside, you may have the right to (1) request
            to know more about and access your personal information, including
            in a portable format, (2) request deletion of your personal
            information, and (3) request correction of inaccurate personal
            information. To request access or deletion of your personal
            information, please click the &apos;Your Privacy Choices&apos; link
            at the bottom of our website. From within an {companyInfo.companyName} app, you can
            make a request by navigating to &apos;Manage Account&apos; under the
            &apos;Settings&apos; tab. You may also make a request by calling
            customer service at 1-888-694-6364. To make a correction request,
            log into your {companyInfo.companyName} account (if you have an account) and make
            changes there, or call customer service at 1-888-694-6364. We may
            verify your request by asking you to provide information related to
            your recent interactions with us, such as your name, email address,
            or raveedaClub membership ID.
          </p>

          <br />
          <p className={styles.para}>OPTING OUT OF TARGETED ADVERTISING</p>
          <p>
            As described in the &apos;How Do We Use Cookies and Other Tracking
            Technologies?&apos; section, we process (and allow others to
            process) personal information to show you targeted ads on
            non-{companyInfo.companyName} websites and applications. We do this via cookies and
            other tracking technologies, or in some cases, we disclose certain
            information (such as your email address or phone number) to our
            advertising partners, who then translate this information into a
            unique identifier. This unique identifier is then used to show you
            ads that are more relevant to you across the web and in mobile apps.
            Depending on where you reside, you may have the right to opt out of
            having your information used for targeted advertising purposes by
            visiting the &apos;Your Privacy Choices&apos; link at the bottom of
            our websites. And, if you are on an {companyInfo.companyName} app, you can opt out by
            clicking the settings icon and going to “Manage Account&apos; under
            “App Settings.&apos; Please note that you will need to renew your
            opt-out choice at each {companyInfo.companyName}-branded Website you visit, if you
            visit our Website with another device or browser, or if you clear
            your cookies. You may still see ads for {companyInfo.companyName} on third-party
            websites and services, but they may be less relevant because they
            aren&apos;t based on your interests.
          </p>

          <br />
          <p className={styles.para}>NON-DISCRIMINATION</p>
          <p>
            We will not discriminate against you if you choose to exercise your
            privacy rights.
          </p>
        </div>
        <div className={styles.section} id="section7">
          <h3>7. How Can You Contact {companyInfo.companyName}?</h3>
          <br />
          <p>
            If you have questions or comments about our privacy practices,
            please contact us by e-mail privacy.policy@{companyInfo.companyName}.co.uk or by mail
            at the following address
          </p>
          <p>
            {companyInfo.companyName} UK Attn: Legal Privacy Policy 5055 N Greeley Ave Portland,
            OR 97217
          </p>
          <br />
          <p>
            If you have questions about a product or service, please contact our
            Customer Service. You can reach Customer Service through multiple
            channels, including by phone at 1-800-982-9337.
          </p>
        </div>
        <div className={styles.section} id="section8">
          <h3>8. Other Privacy, Security and Legal Information</h3>

          <br />
          <p className={styles.para}>Children</p>
          <p>
            We do not knowingly collect or solicit personal information from
            children under 13.
          </p>
          <br />
          <p className={styles.para}>
            How does this policy apply to international users?
          </p>
          <p>
            The Website that links to this Policy is intended for users in the
            United Kingdom. If you choose to provide {companyInfo.companyName} with your
            information, you consent to the transfer and storage of that
            information on our servers located in the United Kingdom and around
            the world. The information collected by {companyInfo.companyName} may be subject to
            international and UK state and federal law. If you are accessing our
            Website from outside the UK, please be advised that you are
            transferring your personal information to us in the United Kingdom
            where data protection and privacy laws may be different than the
            laws of your country. By using our Website, you consent to the
            transfer and use of your personal information in accordance with
            this Policy.
          </p>
          <br />
          <p className={styles.para}>Security</p>
          <p>
            An athlete can&apos;t play without confidence, and you
            shouldn&apos;t order from a company that doesn&apos;t follow
            reasonably secure data practices. We use reasonable security
            procedures to protect your information. However, no data transferred
            over the Internet is guaranteed to be 100% secure. Personal
            information collected at our Website is stored in reasonably secure
            operating environments that are not available to the public. In
            order to help protect your personal information, you should be
            careful about providing your {companyInfo.companyName} account password to others. If
            you wish to cancel your raveedaClub account, log into your account
            online, select Account, then Personal Information, then Delete
            Account. If you become aware of any loss, theft or unauthorized use
            of your password, please contact Customer Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
