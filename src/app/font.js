import localFont from 'next/font/local';
export const futuraPt = localFont({
  src: [
    {
      path: '../../public/fonts/FuturaCyrillicExtraBold.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaCyrillicBold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaCyrillicDemi.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaCyrillicMedium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaCyrillicBook.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/FuturaCyrillicLight.woff',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-futuraPt',
	display: "swap",
});