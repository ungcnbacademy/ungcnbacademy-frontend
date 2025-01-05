'use client';
import React, { useEffect, useState } from 'react';
import styles from './select.module.css';
export default function Select({
	placeholder = 'Select an option',
	onChange = () => {},
	name = '',
	required = false,
	disabled = false,
	style = {},
	variant = 'primary',
	options,
	defaultValue='',
}) {
	const [selectedValue, setSelectedValue] = useState(defaultValue);
	useEffect(() => {
		setSelectedValue(defaultValue);
	},[defaultValue]);

	const handleChange = (e) => {
		setSelectedValue(e.target.value);
		onChange(e);
	};

	return (
		<select
			style={style}
			value={selectedValue}
			onChange={handleChange}
			className={`${styles.select} ${styles[variant]}`}
			name={name}
			required={required}
			disabled={disabled}
		>
			<option value="" disabled>
				{placeholder}
			</option>
			{options?.map((option, index) => (
				<option key={index} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}
