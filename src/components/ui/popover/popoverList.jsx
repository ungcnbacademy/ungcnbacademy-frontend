import React, { useState, useRef, useEffect } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import styles from './popoverList.module.css';

//variant - secondary
export default function PopoverList({ data = [{ title: '', icon: null, function: () => {} }], text = '', variant = 'primary' }) {
  const positionRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      if (positionRef.current) {
        const rect = positionRef.current.getBoundingClientRect();
        const pageX = rect.left + window.scrollX;
        const pageY = rect.top + window.scrollY;
        setPosition({ x: pageX, y: pageY });
      }
    };

    updatePosition();

    // Add event listeners for scroll and resize
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isHovered]);

  return (
    <div className={styles.main} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className={`${styles.topContainer} ${styles[variant]}`}>
        {text && <p className={styles.text}>{text}</p>}
        <BsThreeDotsVertical className={styles.threeDots} ref={positionRef} />
      </div>
      <div className={styles.dropDownContainer}>
        {isHovered && (
          <div
            className={styles.container}
            style={{
              top: `${position.y}px`,
              left: `${position.x}px`,
            }}
          >
            {data.map((item, index) => (
              <div key={index} className={styles.buttonContainer} onClick={item.function}>
                {item.icon && item.icon}
                <p className={styles.button}>{item.title}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
