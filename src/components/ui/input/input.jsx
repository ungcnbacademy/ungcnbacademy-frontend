'use client';
import React from 'react';
import styles from './input.module.css';
export default function Input({
	type = 'text',
	placeholder = 'Enter your text',
	value,
	onChange = () => {},
	name = '',
	required = false,
	disabled = false,
	style = {},
	variant = 'primary',
	defaultValue,
}) {
	// If no value is provided, the input will manage its own state internally
  const isControlled = value !== undefined;
  let minimumLength = 0;
  if (type === 'password') {
    minimumLength = 6;
  } else if (type=== 'text'){
    minimumLength = 1;
  }
	//variants - primary, secondary, outLined
	const handleChange = (e) => {
    onChange(e);
  };

	return (
		<input
			style={style}
			type={type}
			placeholder={placeholder}
			onChange={handleChange}
			{...(isControlled ? { value } : {defaultValue})}
			className={`${styles.input} ${styles[variant]}`}
			name={name}
			required={required}
			disabled={disabled}
			pattern={type === 'tel' ? '^(?:\\+88|88)?(01[3-9]\\d{8})$' : null}
			minLength={minimumLength}
			autoComplete='on'
		/>
	);
}
