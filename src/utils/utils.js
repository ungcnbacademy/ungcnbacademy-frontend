export const getAmountsWithCommas = (number = 0) => {
  let amount = Number(number);
  if (!amount) amount = 0;
  const formattedAmount = amount.toLocaleString('en-UK', {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BDT',
    currencyDisplay: 'symbol',
  });
  return formattedAmount;
};

export const truncateString = (string, length) => {
  if (string?.length > length) {
    return string.slice(0, length) + '...';
  }
  return string;
};

export const logout = () => {
  localStorage.removeItem('user');
  window.location.reload();
};

export const formatTimeSecondsToMinute = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

import moment from "moment";

/**
 * Converts a duration in seconds to a formatted string (e.g., "3h 24m 12s").
 *
 * @param {number} totalSeconds - The total duration in seconds.
 * @returns {string} The formatted duration string.
 */
export function formatDuration(totalSeconds) {
  const duration = moment.duration(totalSeconds, "seconds");

  const hours = Math.floor(duration.asHours());
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  // Construct the formatted string
  return `${hours}h ${minutes}m ${seconds}s`;
}
