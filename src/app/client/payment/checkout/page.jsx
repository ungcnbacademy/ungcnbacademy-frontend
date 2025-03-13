'use client';
import React, { useContext, useEffect, useState } from 'react';
import styles from './page.module.css';
import Input from '@/components/ui/input/input';
import Button from '@/components/ui/button/button';
import { CartContext } from '@/context/cartContext';
import { getAmountsWithCommas } from '@/utils/utils';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import Link from 'next/link';
import Image from 'next/image';
import Message from '@/components/ui/message/message';
import Header from '@/components/atom/header';
import { useRouter } from 'next/navigation';
export default function Checkout() {
  const { globalCart } = useContext(CartContext);
  const [response, error, loading, axiosFetch] = useAxios();
  const [checkMark, setCheckMark] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const router = useRouter();

  const checkoutClickHandler = (event) => {
    event.preventDefault();
    if (!checkMark) {
      setMessage({
        text: 'Please agree to our terms and conditions',
        type: 'error',
      });
      return;
    }
    const formData = new FormData(event.target);
    formData.delete('check');
    const addressPayload = Object.fromEntries(formData);

    const url =
      globalCart?.type === 'Full Course'
        ? `${configuration.client.payment}/${globalCart?.courseId}/initiate-course`
        : `${configuration.client.payment}/${globalCart?.courseId}/initiate-module`;

    const payload =
      globalCart?.type === 'Full Course'
        ? {
            shippingAddress: addressPayload,
						redirectUrl: `${window.location.origin}/client/payment/verify-payment`,
          }
        : {
						redirectUrl: `${window.location.origin}/client/payment/verify-payment`,
            shippingAddress: addressPayload,
            moduleIds: [globalCart?.moduleId],
          };

    axiosFetch({
      method: 'POST',
      url: url,
      requestConfig: payload,
    });
  };

  useEffect(() => {
    if (error?.message) {
      setMessage({ text: error?.message, type: 'error' });
    }
  }, [error]);

  useEffect(() => {
    if (response?.data?.gatewayRedirectURL) {
      //redirect to payment gateway
      window.location.href = response?.data?.gatewayRedirectURL;
    }
  }, [response]);

  useEffect(() => {
    if (!globalCart) {
      router.replace('/courses');
    }
  }, [globalCart]);

  const addressFormRender = () => {
    return (
      <div className={styles.formContainer}>
        <h3 className={styles.title}>Shipping Address</h3>
        <form className={styles.form} onSubmit={checkoutClickHandler}>
          <label>Phone (ex: 01700000000)</label>
          <Input type="text" placeholder="Enter your phone" variant="secondary" name="phone" required />
          <label>Address</label>
          <Input type="text" placeholder="Enter your address" variant="secondary" name="address" required />
          <label>City</label>
          <Input type="text" placeholder="Enter your city" variant="secondary" name="city" required />
          <label>Country</label>
          <Input type="text" placeholder="Enter your country" variant="secondary" name="country" required />
          <br />
          <div className={styles.checkContainer}>
            <Input type="checkbox" name="check" className={styles.check} onChange={(e) => setCheckMark(e.target.checked)} />
            <label className={styles.checkLabel}>
              Please agree to our terms and conditions &nbsp;
              <Link href="/terms-of-sale" className={styles.link}>
                Terms and condition
              </Link>
            </label>
          </div>
          <Message text={message.text} type={message.type} />
          <Button type="submit" variant="secondary" text="Checkout" loading={loading} className={styles.button} />
        </form>
      </div>
    );
  };
  const coursePaymentInfoRender = () => {
    return (
      <div className={styles.infoWrapper}>
        <h2 className={styles.title}>Course Details</h2>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{globalCart?.courseTitle || ''}</h1>
          {globalCart?.moduleTitle && (
            <p className={styles.allModules}>
              Module {globalCart?.moduleOrder}: {globalCart?.moduleTitle || ''}
            </p>
          )}
          {globalCart?.allModules && (
            <div className={styles.allModules}>
              {globalCart?.allModules?.map((module) => (
                <p key={module?._id}>
                  Module {module?.order}: {module?.title || ''}
                </p>
              ))}
            </div>
          )}
          <p className={styles.type}>
            Type: <span>{globalCart?.type || ''}</span>{' '}
          </p>
          <p className={styles.price}>Price: {getAmountsWithCommas(globalCart?.price || globalCart?.modulePrice || '')}</p>
        </div>
        <br />
        <h2 className={styles.title}>Payment </h2>
        <div className={styles.paymentContainer}>
          <p className={styles.paymentText}>Powered by</p>
          <Image src="/assets/payment/1.png" alt="Empty" width={180} height={35} className={styles.paymentIcon} />
        </div>
      </div>
    );
  };
  return (
    <div className={styles.overlay}>
      <Header title={'Checkout'} height={'45vh'} description={'Educational resources from the world’s leading experts on sustainable development'} />
      <div className={styles.main}>
        <div className={styles.left}>{addressFormRender()}</div>
        <div className={styles.right}>{coursePaymentInfoRender()}</div>
      </div>
    </div>
  );
}
