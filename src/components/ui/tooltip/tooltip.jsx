import React, { useState, useRef, useEffect } from 'react';
import styles from './tooltip.module.css';

const Tooltip = ({
  children,
  content,
  placement = 'top',
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (!isVisible || !tooltipRef.current || !containerRef.current) return;

      const trigger = containerRef.current.getBoundingClientRect();
      const tooltip = tooltipRef.current;

      const positions = {
        top: {
          x: trigger.left + (trigger.width / 2),
          y: trigger.top - 8
        },
        bottom: {
          x: trigger.left + (trigger.width / 2),
          y: trigger.bottom + 8
        },
        left: {
          x: trigger.left - 8,
          y: trigger.top + (trigger.height / 2)
        },
        right: {
          x: trigger.right + 8,
          y: trigger.top + (trigger.height / 2)
        }
      };

      const pos = positions[placement];

      if (placement === 'top' || placement === 'bottom') {
        tooltip.style.left = `${pos.x}px`;
        tooltip.style.top = `${pos.y}px`;
        tooltip.style.transform = 'translate(-50%, -100%)';
      } else {
        tooltip.style.left = `${pos.x}px`;
        tooltip.style.top = `${pos.y}px`;
        tooltip.style.transform = placement === 'left' ?
          'translate(-100%, -50%)' :
          'translate(0, -50%)';
      }
    };

    updatePosition();
    window.addEventListener('scroll', updatePosition);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isVisible, placement]);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div
      ref={containerRef}
      className={styles.tooltipContainer}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {content &&isVisible && (
        <div
          ref={tooltipRef}
          className={`${styles.tooltip} ${className}`}
          role="tooltip"
        >
          {content}
          <div
            className={styles.arrow}
            data-placement={placement}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;