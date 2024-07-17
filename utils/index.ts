import axiosConfig from "./axiosConfig";

export const getHeros = async () => {
    try {
        const response = await axiosConfig.get('/people');
        console.log(response.data);
      } catch (error) {
        console.error(error);
    }
}