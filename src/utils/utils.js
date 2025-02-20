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
}

export const logout = () => {
  localStorage.removeItem('user');
  window.location.reload();
}

export const formatTimeSecondsToMinute = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
    .toString()
    .padStart(2, '0')}`;
};
