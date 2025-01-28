export const configuration = {
	baseUrl: 'https://education-platform-api-production.up.railway.app/api',
	login: '/auth/login',
	verifyEmail: '/auth/verify-email',
	requestOTP: '/auth/forgot-password',
	resetPassword: '/auth/reset-password',
	changePassword: '/auth/change-password',
	courses: '/courses',
	admin: {
    admin: '/admin/users', //admin create, delete, update
  },
	client: {
    clientSignup: '/auth/signup', //client signup
  },
};
