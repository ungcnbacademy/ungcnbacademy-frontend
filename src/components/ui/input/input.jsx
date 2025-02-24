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
  className = '',
  minLength,
  maxLength,
  pattern,
}) {
  // If no value is provided, the input will manage its own state internally
  const isControlled = value !== undefined;

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
      {...(isControlled ? { value } : { defaultValue })}
      className={`${styles.input} ${styles[variant]} ${className}`}
      name={name}
      required={required}
      disabled={disabled}
      pattern={type === 'tel' ? '^(?:\\+88|88)?(01[3-9]\\d{8})$' : pattern}
      minLength={minLength}
      maxLength={maxLength}
      autoComplete="on"
    />
  );
}
