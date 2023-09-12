import axios from "axios";

export const axiosHelper = async () => {
  try {
    const { data } = await axios.get(
      import.meta.env.VITE_REACT_APP_URL + "/test"
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
