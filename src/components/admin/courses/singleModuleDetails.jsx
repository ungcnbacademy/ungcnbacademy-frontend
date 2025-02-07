import React, { useEffect } from 'react';
import styles from './singleModuleDetails.module.css';
import useAxios from '@/hooks/useAxios';
import { configuration } from '@/configuration/configuration';
import moment from 'moment';
import LoadingDots from '@/components/ui/loading/loadingDots';
export default function SingleModuleDetails({ courseId, moduleId }) {
	const [response, error, loading, axiosFetch] = useAxios();
	useEffect(() => {
		axiosFetch({
			method: 'Get',
			url: `${configuration.courses}/${courseId}/modules/${moduleId}`,
		});
	}, []);

	return (
		<div className={styles.main}>
			{loading && <LoadingDots />}
			{response?.data && !loading && !error && (
				<>
					<h2 className={styles.title}>Module Details:</h2>
					<p>Title: {response?.data?.title}</p>
					<p># {response?.data?._id}</p>
					<p>
						Created at:{' '}
						{moment(response?.data?.createdAt).format('lll')}
					</p>
					<p>
						Updated at:{' '}
						{moment(response?.data?.updatedAt).fromNow()}
					</p>
					<p>Description:</p>
					<p>{response?.data?.description}</p>
				</>
			)}
		</div>
	);
}
