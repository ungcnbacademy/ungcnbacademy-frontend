import { configuration } from '@/configuration/configuration';

export const getFetchRequests = {
  getAllCourses: async () => {
    try {
      const response = await fetch(`${configuration.baseUrl}${configuration.courses}`, {
        next: { revalidate: 60 },
        //cache: 'no-store',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getCourseById: async (id) => {
    try {
      const response = await fetch(`${configuration.baseUrl}${configuration.courses}/${id}`, {
        next: { revalidate: 60 },
        //cache: 'no-store',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getFeaturedCourses: async () => {
    try {
      const response = await fetch(`${configuration.baseUrl}${configuration.courses}/public?featured=true`, {
        next: { revalidate: 60 },
        //cache: 'no-store',
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
