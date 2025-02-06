'use client';
import React, { useState, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import styles from './textEditor.module.css';

// Dynamically import JoditEditor with SSR disabled
const JoditEditor = dynamic(() => import('jodit-react'), {
	ssr: false,
});

export default function TextEditor({ setData }) {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = useMemo(
		() => ({
			readonly: false,
			placeholder: 'Start typings...',
			toolbar: true,
			statusbar: true,
			disablePlugins: [
				'image',
				'print',
				'video',
				'about',
				'search',
				'table',
				'iframe',
				'script',
			],
			buttons: [
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'ul',
				'ol',
				'fontsize',
				'paragraph',
				'spellcheck',
				'image',
				'align',
				'undo',
				'redo',
				'link',
				'fullsize',
				'outdent',
				'indent',
				'hr',
				'brush',
			],
		}),
		[]
	);

	return (
		<div className={styles.main}>
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				tabIndex={1}
				//onBlur={(newContent) => setContent(newContent)}
				onChange={(newContent) => {
					setContent(newContent);
					setData(newContent);
				}}
			/>
		</div>
	);
}
