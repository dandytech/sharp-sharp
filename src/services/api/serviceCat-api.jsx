import axios from "axios";
import * as ENDPOINT from "../constant";

axios.defaults.baseURL = ENDPOINT.BASE_URL;

//axios.defaults.headers.common["Authorization"] = "";
// Function to retrieve the token (modify this according to your token storage method)
const getToken = () => {
  // Example: Retrieve token from localStorage
  return localStorage.getItem("admin_token");
};

// Function to set the Authorization header
const setAuthHeader = () => {
  const token = getToken();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    throw new Error("No valid token found");
  }
};

//Add Service category API
export const adminAddCategory = async (payload) => {
  try {
    // Set the Authorization header before making the request
    setAuthHeader();

    const response = await axios.post(`${ENDPOINT.ADMIN_ADD_CAT}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to Add Category");
    }
  }
};

// Get Service category API using GET request
export const getCategories = async () => {
  try {
    // Set the Authorization header before making the request
    setAuthHeader();

    const response = await axios.get(`${ENDPOINT.ADMIN_GET_CAT}`);

    return response.data.categories;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to Fetch Categories");
    }
  }
};

// Get Service category API using GET request
export const getCategoriesProvider = async () => {
  try {
    const response = await axios.get(`${ENDPOINT.PROVIDER_GET_CAT}`);

    return response.data.categories;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to Fetch Categories");
    }
  }
};

// Admin Updtate Service category API using GET request
export const updateCategoryApi = async (payload) => {
  try {
    // Set the Authorization header before making the request
    setAuthHeader();

    const response = await axios.put(`${ENDPOINT.ADMIN_UPDATE_CAT}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to update Category");
    }
  }
};

// Admin Updtate Service category API using GET request
export const deleteCategoryApi = async (payload) => {
  try {
    // Set the Authorization header before making the request
    setAuthHeader();

    const response = await axios.delete(`${ENDPOINT.ADMIN_DELETE_CAT}`, {
      data: payload, // Pass the payload here
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to Delete Category");
    }
  }
};
