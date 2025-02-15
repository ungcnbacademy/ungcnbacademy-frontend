'use client';
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Status() {
    const [slugs, setSlugs] = useState('');
const searchParams = useSearchParams();
const pathname = usePathname();

const tranId = searchParams.get('tran_id');
    useEffect(() => {
        const url = new URL(window.location.href);
        const slugs = url.pathname.split('/').pop();
        setSlugs(slugs); // Store the value in state
    }, []);

    return (
        <div className={styles.overlay}>
            <div className={styles.header}>
                <h3 className={styles.title}>Payment status dynamic</h3>

            </div>
						<h4>{slugs}</h4> {/* Now this will work */}
						<h4>{tranId}</h4>
						<h4>{pathname}</h4>
        </div>
    );
}
