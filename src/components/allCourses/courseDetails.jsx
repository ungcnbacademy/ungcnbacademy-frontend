import { getFetchRequests } from '@/fetch ssr/getFetchRequests';
import React from 'react';
import styles from './courseDetails.module.css';
import Image from 'next/image';
import { getAmountsWithCommas } from '@/utils/utils';
import moment from 'moment';
import Button from '../ui/button/button';
export default async function CourseDetails({ id }) {
	const response = await getFetchRequests.getCourseById(id);
	console.log(response);
	return (
		<div className={styles.main}>
			<Image
				src={response?.data?.thumbnail}
				alt={response?.data?.title}
				width={500}
				height={500}
				className={styles.image}
			/>
			<div className={styles.container}>
				<div className={styles.left}>
					<h1 className={styles.title}>{response?.data?.title}</h1>
					<p className={styles.description}>
						{response?.data?.description}
					</p>
				</div>
				<div className={styles.right}>
          <p className={styles.price}>
            Price: {getAmountsWithCommas(response?.data?.price)}
          </p>
          <p className={styles.price}>
            Created at:{' '}
            {moment(response?.data?.createdAt).format('lll')}
          </p>
          <Button text='Enroll Now' className={styles.button} variant='secondary' />
        </div>
			</div>
		</div>
	);
}
