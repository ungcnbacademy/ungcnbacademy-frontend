'use client';
import React, { useEffect, useState } from 'react';
import styles from './assetDetails.module.css';
import { FaRegFilePdf } from 'react-icons/fa6';
import { IoDocumentOutline } from 'react-icons/io5';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import PopoverList from '../ui/popover/popoverList';
import { RiDeleteBin7Line } from 'react-icons/ri';
import useAxios from '@/hooks/useAxios';
import Toast from '../ui/toast/toast';

export default function AssetDetails({ title, type, size, url, viewUrl, refresh }) {
  const [responseDelete, errorDelete, loadingDelete, axiosFetchDelete] = useAxios();
  const [responseDownload, errorDownload, loadingDownload, axiosFetchDownload] = useAxios();
  const [message, setMessage] = useState({ text: '', type: '' });

  const deleteAssetHandler = () => {
    axiosFetchDelete({
      method: 'DELETE',
      url: url,
    });
  };
  const downloadAssetHandler = () => {
    axiosFetchDownload({
      method: 'GET',
      url: `${url}/download`,
    });
  };
  useEffect(() => {
    if (responseDelete?.message) {
      refresh();
      // setMessage({ text: responseDelete?.message, type: 'success' });
    }
    if (errorDelete?.message) {
      setMessage({ text: errorDelete?.message, type: 'error' });
    }
  }, [responseDelete, errorDelete]);

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
      {message.text && <Toast text={message.text} variant={message.type} />}
      {loadingDelete && <Toast text="Please wait..." variant="warning" />}
      {iconRender()}
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <p className={styles.size}>{convertBytesToMB()}</p>
      </div>
      <PopoverList
        data={[
          {
            title: 'View',
            icon: <IoDocumentOutline />,
            function: () => {
              window.open(viewUrl, '_blank');
            },
          },
          {
            title: 'Download',
            icon: <IoCloudDownloadOutline />,
            function: () => {
              downloadAssetHandler();
            },
          },
          {
            title: 'Delete',
            icon: <RiDeleteBin7Line />,
            function: () => {
              confirm('Are you sure you want to delete this asset?') && deleteAssetHandler();
            },
          },
        ]}
      />
    </div>
  );
}
