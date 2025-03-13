import { companyInfo } from '@/constants/constants';
import styles from './page.module.css';
import Header from '@/components/atom/header';
export const metadata = { title: 'Terms of Sale' };

const page = () => {
  return (
    <>
      <Header
        title={' Terms of sales'}
        description={
          'The UNGCNB Academy represents the education and training portfolio of the UN Sustainable Development Solutions Network.'
        }
        image={'/assets/legal-bg.webp'}
      />
      <div className={styles.main}>
        <h2>TERMS OF SALE</h2>
        <div className={styles.container}>
          <p>
            Please read these Terms of Sale carefully before ordering Products online from the {companyInfo.companyName} Platform.
          </p>
          <br />
          <p>
            If you are located in any of the countries identified below, additional country-specific terms may apply to you and
            are viewable at the end of these Terms of Sale or by clicking on the country reference link. These additional terms
            override the Terms below to the extent of any inconsistency.
          </p>
          <br />
          <h3>APPLICABILITY</h3>
          <br />
          <p>
            You are reading these Terms of Sale (&apos;Terms of Sale&apos;) because you are using a {companyInfo.companyName}{' '}
            website, digital experience, social media platform, mobile app, wearable technology, or one of our other products or
            services, all of which are part of {companyInfo.companyName}&apos;s Platform (&apos;Platform&apos;). These Terms of
            Sale create a legally binding agreement between you and {companyInfo.companyName} and its affiliates (which we may
            refer to as &apos;{companyInfo.companyName}&apos;, &apos;we&apos;, &apos;us&apos;, or &apos;our&apos;) regarding
            orders placed for products available on the Platform. Please review our <b>List of Local Entities</b> for the name of
            the {companyInfo.companyName} entity responsible for providing the Platform to you and the appropriate contact
            information. {companyInfo.companyName} may revise these Terms of Sale without notice by posting revised Terms of Sale
            on its Platform. The Terms of Sale posted on the Platform at the time you place your order on the Platform will govern
            that purchase. Please read these terms carefully and check that the details of your order are complete and accurate
            before submitting your order. Your use of the Platform is also governed by {companyInfo.companyName}&apos;s Terms of
            Use and Privacy Policy. The Terms of Use are incorporated herein by this reference.
          </p>
          <br />
          <h3>PLACING ORDERS ON THE PLATFORM</h3>
          <br />
          <p>ELIGIBILITY TO ORDER</p>
          <br />
          <p>
            To place an order on the Platform, you must be at least 16 years old, or older if that is required under applicable
            law to enter into an agreement with {companyInfo.companyName}, and a be consumer - not a reseller.
          </p>
          <br />
          <p>NO PURCHASE FOR RESALE</p>
          <br />
          <p>
            The Platform is intended solely for {companyInfo.companyName} to sell {companyInfo.companyName} products direct to end
            consumers, and therefore purchase of products for resale is strictly prohibited. Purchase for resale means the
            purchase of
            {companyInfo.companyName} product by someone who resells, or intends to resell, the
            {companyInfo.companyName} product to others (consumers, businesses or any third party). If {companyInfo.companyName}{' '}
            believes you are involved in purchase for resale, {companyInfo.companyName}
            reserves the right to take any action against you, including, without limitation, to restrict sales to you, cancel
            your orders, and/or suspend or close your account.
          </p>
          <br />
          <p>HOW TO ORDER</p>
          <br />
          <p>
            You need an email address to place an order, and you may need to set your browser to accept both (functional) cookies
            and pop-ups in order to be able to use all the functionalities of the Platform, which includes designing customized
            items, adding items to your shopping bag and submitting your order.
          </p>
          <br />
          <p>
            When you submit an order we will send you an email acknowledging receipt of your order. Our acceptance of the order
            takes place when the Products are shipped to you - we will send you an email confirming that the Products have been
            shipped (&apos;Order Confirmation&apos;). At this point a contract, containing these Terms of Sale, comes into
            existence and is binding on you and us (the &apos;Contract&apos;). We recommend that you print or download a copy of
            these Terms of Sale and the relevant Order Confirmation for future reference. If we are unable to supply you with a
            product, we will inform you of this in writing and will not process the order.
          </p>
          <br />
          <p>OUR RIGHT TO REJECT YOUR ORDER OR CANCEL A CONTRACT</p>
          <br />
          <p>
            Fulfilment of all orders on the Platform is subject to availability. We explicitly reserve the right not to accept
            your order for any reason. We also reserve the right to cancel a Contract by written notice to you in the following
            situations, without being liable for any damage or costs other than repayment of any amount received from you in
            relation to the Contract we cancelled:
          </p>
          <br />
          <ul>
            <li>the product is not available / in stock;</li>
            <li>your billing information is not correct or not verifiable;</li>
            <li>your order is flagged up by our security systems as an unusual order or an order susceptible to fraud;</li>
            <li>
              you are under 16, or under an older age if an older age is permitted under applicable law to enter into an agreement
              with {companyInfo.companyName};
            </li>
            <li>you are a reseller;</li>
            <li>there was an error in the price displayed on the Platform; or</li>
            <li>we could not deliver to the address provided by you;</li>
            <li>due to an Event Outside Our Control (see below).</li>
          </ul>
          <br />
          <p>DATA CHECK</p>
          <br />
          <p>
            When you send us your order, we may run some checks on it before it is fulfilled. These checks may include verifying
            your address and checking for fraud. We run partly automated checks on all purchases to filter out unusual or suspect
            transactions, or transactions which can be identified as susceptible to fraud. Suspected fraud on the Platform will be
            investigated and if necessary prosecuted.
          </p>
          <br />
          <h3>PRICE/PAYMENT</h3>
          <br />
          <p>PAYMENT METHODS</p>
          <br />
          <p>
            You can find the available payment methods for each country in the help section of {companyInfo.companyName}.co.uk
            (the &apos;Website&apos;). We do not accept any method of payment other than those listed in the help section. Please
            do not try to pay by any other way than specified there. If you do, we will not be liable for loss of the payment or
            any other damages that may result from this action.
          </p>
          <br />
          <p>PAYMENT PROCESSING</p>
          <br />
          <p>
            If you pay by credit/debit card, we will deduct the amount due from your account as soon as your order leaves our
            warehouse. If you pay by bank transfer (only available for bulk orders), we will start delivery (or manufacturing in
            the case of customized (RAVEEDAiD) products) after we receive your payment. This may take several days. In the event
            that no payment has been received within 12 calendar days after you submitted your order, your purchase will
            automatically be cancelled. Payments can only be processed if the billing information can be verified.
          </p>
          <br />
          <p>TITLE TRANSFER</p>
          <br />
          <p>We retain title in any product(s) until we have received full payment for such product(s).</p>
          <br />
          <p>PRICES AND CURRENCY</p>
          <br />
          <p>
            The product prices displayed on the Platform are inclusive of Value-Added Tax (VAT), as applicable. Shipping rates are
            applied per order. The exact shipping rates depend on the country where your order is being delivered to. For details
            on shipping rates per country see the help section of the Website.
          </p>
          <br />
          <p>
            Prices are quoted in local currency GBP. If you change the country of delivery while browsing or during check out,
            prices from that moment may be quoted in a different currency. Please note that changing the country of delivery may
            have an influence on the price due to a change in currency or to country specific pricing.
          </p>
          <br />
          <p>YOUR TOTAL PRICE</p>
          <br />
          <p>
            The total price specified in the final checkout screen includes tax and shipping costs. This price will be recorded in
            the Order Confirmation, which we recommend you print or download for future reference. If paying by credit card, the
            total amount for your entire order will be reflected on your statement in your local currency.
          </p>
          <br />
          <p>
            If your local currency is different from the currency in which the prices are quoted, your bank will apply the
            exchange rate applicable per the date of purchase. Your bank may apply a different exchange rate, which is beyond our
            control.
          </p>
          <br />
          <p>Cash on delivery (cod)</p>
          <br />
          <p>
            If you have chosen the payment method &apos;cash on delivery&apos;, the order amount set forth on your shipment
            confirmation in the local currency of your destination country must be paid in full before receiving your items and
            signing the delivery sheet. The package can be opened and your items inspected only after the payment is made
          </p>
          <br />
          <p>PRICE CHANGES</p>
          <br />
          <p>
            The prices of the products will be as displayed on the Platform. Prices may change from time to time, but changes will
            not affect any order which we have confirmed in an Order Confirmation
          </p>
          <br />
          <p>SHIPPING & DELIVERY</p>
          <br />
          <p>DELIVERY – WHERE AND WHEN</p>
          <br />
          <p>
            We do not ship on certain public holidays. Please refer to the help section of the Website for dates and the available
            delivery times and methods. We can only fulfil an order to a delivery address which is a home or office address in one
            of the countries listed in the help section of the Website.
          </p>
          <br />
          <p>SPLIT DELIVERY</p>
          <br />
          <p>
            Where possible, we try to deliver all items which you have ordered at the same time. However, please note that due to
            the fact that customized (RAVEEDAiD) products are manufactured at different factories, an order for multiple
            customized (RAVEEDAiD) products may result in split shipments.
          </p>
          <br />
          <p>
            We reserve the right to split the delivery of your order, for instance if part of your order is delayed or
            unavailable. In the event that we split your order, we will notify you of our intention to do so by sending you an
            email to the email address provided by you at the time your order was placed. You will not be charged for any
            additional delivery costs.
          </p>
          <br />
          <p>INSPECTION UPON DELIVERY</p>
          <br />
          <p>
            Upon delivery, please inspect the packaging for damage. If it appears that the products are damaged, please do not
            accept the shipment.
          </p>
          <br />
          <p>SHIPPING RATES</p>
          <br />
          <p>FREE SHIPPING</p>
          <br />
          <p>
            If you make a purchase that exceeds the threshold relevant to your delivery country, you will receive FREE
            &apos;standard delivery&apos;, or the option of discounted &apos;express delivery&apos;. Other conditions may also
            qualify you for free shipping. See the help section of the Website for threshold amounts and their corresponding
            discounted delivery rates.
          </p>
          <br />
          <h3>Customizing items</h3>
          <br />
          <p>Customization conditions</p>
          <br />
          <p>
            For most customized (RAVEEDAiD) items, you can submit a combination of letters, spaces and numbers to form an
            &apos;ID&apos; – a personalized message that appears on your creation. We reserve the right in our sole discretion to
            decline an ID, for example because it contains a trademark belonging to third party, or the names of sports teams,
            athletes or celebrities that you (or {companyInfo.companyName}) do not have the right to use, or because it contains
            material that we consider inappropriate. If we reject your ID you will be notified as soon as possible by email.
          </p>
          <br />
          <p>Consumer acknowledgements relating to customization</p>
          <br />
          <p>
            Both your design of the item (the colour combination etc.) and the personalization shall be created by you. To the
            extent this is not the case, you hereby guarantee that you are authorized to use the design or the personalization
            created by someone else.
          </p>
          <br />
          <p>
            Please understand that whilst we have the right to decline your personalization or your design, you are solely
            responsible for your design and personalization, and we have no obligation to review or decline your design or
            personalization.
          </p>
          <br />
          <p>
            Your design and your personalization qualify as what we call &apos;User Content&apos;. Article 2 of the Terms of Use
            applies to your design and your personalization.
          </p>
          <br />
          <h3>RETURNS & CANCELLATIONS</h3>
          <br />
          <p>CANCELLING ORDER BEFORE DELIVERY</p>
          <br />
          <p>
            You may cancel any order free of charge and without giving us any reason, provided it has not yet been shipped. We
            begin processing orders placed at our online store almost immediately. If you wish to cancel your order, please check
            the status of your order first by visiting the &apos;Order status&apos; link at the top right of the Website
          </p>
          <br />
          <p>
            If the status of your order is &apos;Pending&apos; or &apos;On Hold&apos; you may cancel your order by contacting our
            call centre (see help section of the Website). Our consumer service agents will request a cancellation of your order
            at our warehouse. If successful, they will send you an email and the cancellation will be free of charge. If
            cancellation is not possible, the product(s) will be delivered to you and may be returned in accordance with the
            procedure set out below.
          </p>
          <br />
          <p>
            Customized (RAVEEDAiD) orders cannot be cancelled before shipment, because we start building the customized
            (RAVEEDAiD) products immediately after receiving the order
          </p>
          <br />
          <p>RETURNING ORDERS AFTER DELIVERY – DEFECTIVE PRODUCTS</p>
          <br />
          <p>
            You are entitled to return products delivered to you in the event that they are defective or otherwise not in
            conformity with your order when you received them. In the event your claim is justified, the purchase price and the
            shipping costs will be refunded. For practical information on how to return, see the help section of the Website.
          </p>
          <br />
          <p>
            We moreover remind you that under EU law, we are liable to you for any lack of conformity in a product that becomes
            apparent within a minimum of two years from delivery of the product and that you have several statutory rights in this
            context. The foregoing does not limit these statutory rights in any way.
          </p>
          <br />
          <p>YOUR RIGHT OF WITHDRAWAL</p>
          <br />
          <p>
            If for whatever reason you are not happy with a product you ordered, you may exercise your statutory right of
            withdrawal. You can invoke your right of withdrawal by informing us that you want to return the product within 30
            calendar days after the product is delivered to you or to a third party indicated by you (other than the carrier) or,
            if you have ordered multiple goods in one order which are delivered separately, within 30 calendar days after the last
            product is delivered, without giving us any reason.
          </p>
          <br />
          <p>
            If you use your right of withdrawal, you have an obligation to return the products to us without undue delay and no
            later than 30 calendar days from the day on which you have communicated to us that you invoke your right of
            withdrawal.
          </p>
          <br />
          <p>
            Please make sure that the products you return are complete (e.g. both items of a pair must be returned) and not used
            in any way other than what is reasonably necessary to decide if you want to keep the products (meaning that you are
            allowed to try garments or shoes on for fit, but you cannot wear or wash them). If you do not comply with the
            foregoing and the value of the product diminishes as a consequence thereof, we can hold you liable for such diminished
            value. The right of withdrawal does not apply if the product is made to your specification or clearly personalized
            (for example: RAVEEDAiD products).
          </p>
          <br />
          <p>
            For practical information on how to return, see the help section of the Platform, which contains a withdrawal form
            that you can use to exercise your right of withdrawal. You can also inform us that you want to exercise your right of
            withdrawal by another unequivocal statement (e.g. by a letter, fax or email). It is sufficient that you send this
            statement to us before the withdrawal period ends.
          </p>
          <br />
          <p>
            If you inform us that you wish to return a product, we shall reimburse to you all payments received, including the
            delivery costs (with the exception of any supplementary costs resulting from your choice of delivery other than the
            least expensive type of standard delivery offered by us) without undue delay and in any event not later than 30 days
            from the day on which we are informed about your decision to exercise your right of withdrawal. We may however choose
            to withhold the reimbursement until we have received the products back or until you have supplied evidence of having
            sent back the products.
          </p>
          <br />
          <p>REFUND INFORMATION</p>
          <br />
          <p>
            Refunds will be issued based on the original form of payment. If you paid via bank transfer you need to give this
            information to Customer Service when you initiate the return so that we can refund the money directly to your account.
            For practical information on how to return and for refund timelines.
          </p>
          <br />
          <p>CONDITIONS APPLICABLE TO PRE-ORDERED PRODUCTS</p>
          <br />
          <p>
            <b>Pre-order.</b> is the process by which you are able to order a product in advance of the scheduled retail launch.
            Due to the nature of pre ordering, the following specific conditions apply to pre-ordered products:
          </p>
          <br />
          <p>
            <b>Delivery.</b> Pre-ordered products are targeted to be delivered before the retail launch date, provided that we
            have received your payment at least 3 working days before such date. Concrete delivery times depend on the moment the
            product is available in our warehouse. Standard delivery timelines will apply from the moment the pre-ordered product
            is available in our warehouse. This information is best estimates only, timelines are not binding
          </p>
          <br />
          <p>
            <b>Payment.</b> Unless you have chosen for payment upon or after delivery, the following applies. Your payment will be
            deducted as soon as the order is received (or, in the event of bank transfer, as soon as possible). We will not start
            the execution of your order prior to having received payment. For bank transfers this may mean that delivery will be
            later than set out under the bullet point above.
          </p>
          <br />
          <p>
            <b>Product launch date.</b> The scheduled retail launch date (product launch) for your pre-order product can be found
            in the product description page on the Website.
          </p>
          <br />
          <h3>EVENTS OUTSIDE OUR CONTROL</h3>
          <br />
          <p>
            An Event Outside Our Control means any act or event beyond our reasonable control, including without limitation
            strikes, lock-outs or other industrial action by third parties, civil commotion, riot, invasion, terrorist attack or
            threat of terrorist attack, war (whether declared or not) or threat or preparation for war, fire, explosion, storm,
            flood, earthquake, subsidence, epidemic, pandemic, or other natural disaster, or failure of public or private
            telecommunications networks.
          </p>
          <br />
          <p>
            If an Event Outside Our Control takes place that affects the performance of our obligations under these Terms of Sale
          </p>
          <br />
          <ol>
            <li>We will contact you as soon as reasonably possible to notify you; and</li>
            <li>
              Our obligations under these general conditions will be suspended and the time for performance of our obligations
              will be extended for the duration of the Event Outside Our Control.
            </li>
          </ol>
          <br />
          <p>
            Where the Event Outside Our Control affects our delivery of a product to you, we will arrange a new delivery date with
            you after the Event Outside Our Control is over. You may cancel the contract if an Event Outside Our Control takes
            place and you no longer wish us to provide the products. Please see your cancellation rights under Cancellation above
          </p>
          <br />
          <p>OTHER IMPORTANT TERMS</p>
          <br />
          <p>
            We may transfer our rights and obligations under a contract to another organization, but this will not affect your
            rights or our obligations under these Terms of Sale.
          </p>
          <br />
          <p>
            You may only transfer your rights or your obligations under these Terms of Sale to another person if we agree in
            writing.
          </p>
          <br />
          <p>
            Each of the paragraphs of these Terms of Sale operates separately. If any court or relevant authority decides that any
            of them are unlawful or unenforceable, the remaining paragraphs will remain in full force and effect.
          </p>
          <br />
          <p>
            If we fail to insist that you perform any of your obligations under these Terms of Sale, or if we do not enforce our
            rights against you, or if we delay in doing so, that will not mean that we have waived our rights against you and will
            not mean that you do not have to comply with those obligations.
          </p>
          <br />
          <p>
            If we do waive a default by you, we will only do so in writing, and that will not mean that we will automatically
            waive any later default by you. We will not file a copy of the contract between us.
          </p>
          <br />
          <h3>CHOICE OF LAW/JURISDICTION</h3>
          <br />
          <p>
            You agree that the Platform, Terms of Sale, and any dispute between you and {companyInfo.companyName} shall be
            governed in all respects by Dutch law, without regard to choice of law provisions, and not by the 1980 U.N. Convention
            on Contracts for the International Sale of Goods.
          </p>
          <br />
          <p>
            In case you have a complaint, please contact us via contact us page first. If you feel your complaint is not
            adequately addressed you can – but are not obliged to – use the Online Dispute Resolution (ODR) platform that you can
            access through http://ec.europa.eu/odr
          </p>
          <br />
          <p>
            All claims shall be brought within one (1) year after the claim arises, to the extent allowed under applicable law.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
