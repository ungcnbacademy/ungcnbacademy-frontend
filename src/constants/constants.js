export const tableDefaultItemLimit = 10;

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

export const allAdminRoles = [
	userRoles.admin.admin.role,
	userRoles.admin.subAdmin.role,
	userRoles.admin.moderator.role,
];

export const companyInfo = {
	companyName: 'ESG edTech',
	websiteName: 'ESG edTech',
	name: "ESG edTech",
  address: "6th Floor, BIMS Bhaban, 3 Progoti Sharani, Dhaka 1212, Bangladesh",
  phone: "+8801626-658248",
  email: "info@esginstitutebd.com",
  website: "https://esgeducation.netlify.app",
  googleMapAddress: "https://www.google.com/maps/place/ESG+Institute+Bangladesh/@23.7907918,90.4251343,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c700057bae11:0xb1dc187232bc98b6!8m2!3d23.7907918!4d90.4251343!16s%2Fg%2F11ln9dw9zl?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D",
  socials: {
    facebook: "https://www.facebook.com",
    twitter: "https://twitter.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
    whatsapp: "https://wa.me/8801626658248"
  },
  developer: {
    company: 'ContentPro.',
    website: 'https://contentprobd.com'
  }
};

export const orderStatus = [
	{
		label: 'Pending',
		value: 'PENDING',
		background: '#fff9c4', // Light yellow
		color: '#f57f17', // Muted yellow
	},
	{
		label: 'Confirmed',
		value: 'CONFIRMED',
		background: '#e3f2fd', // Light blue
		color: '#1565c0', // Muted blue
	},
	{
		label: 'Preparing',
		value: 'PREPARING',
		background: '#ede7f6', // Light lavender
		color: '#5e35b1', // Muted purple
	},
	{
		label: 'Ready',
		value: 'READY',
		background: '#d7ffd9', // Light mint green
		color: '#2e7d32', // Muted green
	},
	{
		label: 'Out For Delivery',
		value: 'OUT_FOR_DELIVERY',
		background: '#ffecb3', // Light amber
		color: '#ff6f00', // Muted amber
	},
	{
		label: 'Delivered',
		value: 'DELIVERED',
		background: '#e8f5e9', // Light green
		color: '#1b5e20', // Dark green
	},
	{
		label: 'Cancelled',
		value: 'CANCELLED',
		background: '#fcd0d0', // Light red
		color: '#e5000072', // Muted red
	},
];

export const paymentStatus = [
	{
		label: 'Pending',
		value: 'PENDING',
		background: '#fff9c4', // Pale yellow
		color: '#f57f17', // Amber
	},
	{
		label: 'Paid',
		value: 'PAID',
		background: '#e8f5e9', // Light green
		color: '#2e7d32', // Deep green
	},
	{
		label: 'Refunded',
		value: 'REFUNDED',
		background: '#ede7f6', // Light lavender
		color: '#5e35b1', // Violet
	},
	{
		label: 'Processing',
		value: 'PROCESSING',
		background: '#e3f2fd', // Light blue
		color: '#1565c0', // Blue
	},
	{
		label: 'On Hold',
		value: 'ON_HOLD',
		background: '#f5ffbe', // Light yellow-green
		color: '#d3890086', // Orange-muted
	},
];
