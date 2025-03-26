export const tableDefaultItemLimit = 10;
export const cloudflareCustomerId = 'vv3mcx6scdxfhofx';

export const userRoles = {
  admin: {
    admin: {
      title: 'Admin',
      role: 'admin',
    },
    subAdmin: {
      title: 'Sub Admin',
      role: 'subAdmin',
    },
    moderator: {
      title: 'Moderator',
      role: 'moderator',
    },
  },
  client: {
    title: 'User',
    role: 'user',
  },
};

export const allAdminRoles = [userRoles.admin.admin.role, userRoles.admin.subAdmin.role, userRoles.admin.moderator.role];

export const clientPaymentStatus = {
  success: 'success',
  failed: 'failed',
  cancelled: 'cancelled',
};

export const companyInfo = {
  companyName: 'UNGCNB Impact Academy',
  websiteName: 'UNGCNB Impact Academy',
  name: 'UNGCNB Impact Academy',
  address: 'House: 11, Road: 14, Gulshan 1, Dhaka 1212, Bangladesh.',
  phone: '+8801671978757',
  email: 'info@globalcompactbd.org',
  website: 'https://esgeducation.netlify.app',
  sitemap: 'https://esgeducation.netlify.app/sitemap.xml',
  googleMapAddress:
    'https://www.google.com/maps/place/ESG+Institute+Bangladesh/@23.7907918,90.4251343,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c700057bae11:0xb1dc187232bc98b6!8m2!3d23.7907918!4d90.4251343!16s%2Fg%2F11ln9dw9zl?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D',
  socials: {
    facebook: 'https://www.facebook.com/GlobalCompactBangladesh',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/company/global-compact-network-bangladesh/',
    youtube: 'https://www.youtube.com/',
    whatsapp: 'https://wa.me/8801671978757',
  },
  developer: {
    company: 'ContentPro.',
    website: 'https://contentprobd.com',
  },
};
