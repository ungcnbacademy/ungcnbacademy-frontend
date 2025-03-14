export const configuration = {
  baseUrl: 'https://education-platform-api-production.up.railway.app/api',
  login: '/auth/login',
  verifyEmail: '/auth/verify-email',
  requestOTP: '/auth/forgot-password',
  resetPassword: '/auth/reset-password',
  changePassword: '/auth/change-password',
  courses: '/courses',
  certificate: '/final-cert',
  admin: {
    admin: '/admin/users', //admin create, delete, update
    quizReview: '/admin/quizzes/ungraded',
    singleQuiz: '/admin/quizzes/attempts',
    reviews: '/admin/reviews',
  },
  client: {
    clientSignup: '/auth/signup', //client signup
    enrolledCourses: '/users/enrolled-courses',
    profile: '/users/profile',
    payment: '/payments/courses',
  },
  enroll: '/test-enrollment/courses',
};
