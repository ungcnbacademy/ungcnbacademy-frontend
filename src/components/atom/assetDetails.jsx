import React from 'react';
import styles from './assetDetails.module.css';
import { FaRegFilePdf } from 'react-icons/fa6';
import { IoDocumentOutline } from 'react-icons/io5';
import DotsInfo from '../ui/threeDotsInfoButton/dotsInfo';

export default function AssetDetails({ title, description, type, size }) {
	console.log(type);
	const iconRender = () => {
		switch (type) {
			case 'application/pdf':
				return <FaRegFilePdf className={styles.icon} />;
			default:
				return <IoDocumentOutline className={styles.icon} />;
		}
	};

	const convertBytesToMB = () => {
		const mb = size / 1024 / 1024;
		return `Size: ${mb.toFixed(2)} MB`;
	};

	return (
		<div className={styles.main}>
			{iconRender()}
			<div className={styles.container}>
				<p className={styles.title}>{title}</p>
				<p className={styles.size}>{convertBytesToMB()}</p>
			</div>
			<DotsInfo
				data={[
					{
						title: 'Delete',
						function: () => {
							alert('delete');
						},
					},
          {
            title: 'Download',
            function: () => {
              alert('download');
            },
          }
				]}
			/>
		</div>
	);
}
