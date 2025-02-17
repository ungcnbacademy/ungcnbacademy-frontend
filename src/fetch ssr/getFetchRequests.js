import { configuration } from '@/configuration/configuration';

export const getFetchRequests = {
	getAllCourses: async () => {
		try {
			const response = await fetch(
				`${configuration.baseUrl}${configuration.courses}`,
				{ cache: 'no-store' }
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	},
	getCourseById: async (id) => {
		try {
			const response = await fetch(
				`${configuration.baseUrl}${configuration.courses}/${id}`,
				{ cache: 'no-store' }
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	},
	getFeaturedCourses: async () => {
		try {
			const response = await fetch(
				`${configuration.baseUrl}${configuration.courses}?featured=true`,
				{ cache: 'no-store' }
			);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	},
};
