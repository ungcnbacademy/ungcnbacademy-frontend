import { companyInfo } from '@/constants/constants';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/courses/'],
      disallow: ['/admin/', '/client/'],
    },
    sitemap: companyInfo.sitemap,
  };
}
