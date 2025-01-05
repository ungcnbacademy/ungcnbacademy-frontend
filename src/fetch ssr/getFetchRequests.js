import { configuration } from "@/configuration/configuration";

export const getFetchRequests = {
  getAllStores: async () => {
    try {
      const response = await fetch(`${configuration.baseUrl}${configuration.client.stall}`, {cache: 'no-store'});
      const data = await response.json();
      return data
    } catch (error) {
      console.log(error);
    }
  },
  getStoreById: async (id) => {
    try {
      const response = await fetch(`${configuration.baseUrl}${configuration.client.stall}/${id}`, {cache: 'no-store'});
      const data = await response.json();
      return data
    } catch (error) {
      console.log(error);
    }
  }
}