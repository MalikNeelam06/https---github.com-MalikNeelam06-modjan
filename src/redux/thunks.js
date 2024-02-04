// thunks.js
import { fetchDataSuccess } from "./actions";

export const fetchData = () => async (dispatch) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch(fetchDataSuccess(data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
