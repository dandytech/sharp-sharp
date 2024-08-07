import axios from "axios";
import * as ENDPOINT from "../constant";
import useAuth from "../../hooks/useAuth";
import { updateImage, updateLocalData } from "../../utils/helpers";

axios.defaults.baseURL = ENDPOINT.BASE_URL;
axios.defaults.headers.common["Authorization"] = "";

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

const getUserToken = () => {
  // Example: Retrieve token from localStorage
  return localStorage.getItem("client_token");
};

const setUserAuthHeader = () => {
  const token = getUserToken();
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    console.log(`Authorization header set with token: ${token}`);
  } else {
    throw new Error("No valid token found");
  }
};

//Signup Client API
export const registerClient = async (payload) => {
  try {
    const response = await axios.post(`${ENDPOINT.REGISTER_USER}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Registration failed");
    }
  }
};

//Signup provider API
export const registerProvider = async (payload) => {
  try {
    const response = await axios.post(`${ENDPOINT.PROVIDER_SIGNUP}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Registration failed");
    }
  }
};

//Signup Verification API
export const verifyClient = async (payload) => {
  try {
    const response = await axios.post(`${ENDPOINT.CLIENT_VERIFY}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Email Verification failed");
    }
  }
};

//Signup verification Code Resend API
export const verifyClientResend = async (payload) => {
  try {
    const response = await axios.post(
      `${ENDPOINT.CLIENT_RESEND_VERIFY}`,
      payload,
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Code Resending failed");
    }
  }
};

//ClientLogin API
export const loginClient = async (payload) => {
  try {
    const response = await axios.post(`${ENDPOINT.LOGIN_USER}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Login failed");
    }
  }
};

//Client Logout API
export const logoutClient = async () => {
  const token = localStorage.getItem("client_token");
  return axios
    .get(`${ENDPOINT.CLIENT_LOGOUT}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Logout error:", error);
      throw error; // Re-throw the error to handle it in the calling function
    });
};

//Passord Reset
export const resetPassword = async (payload) => {
  try {
    const response = await axios.post(`${ENDPOINT.PASSWORD_RESET}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Passord Reset failed");
    }
  }
};

//check/confirm password reset OTP code
export const checkPasswordCode = async (payload) => {
  try {
    const response = await axios.post(
      `${ENDPOINT.CHECK_PASSWORD_CODE}`,
      payload,
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalid Code!!!");
    }
  }
};

//Reset password
export const changePassword = async (payload) => {
  try {
    const response = await axios.post(`${ENDPOINT.CHANGE_PASSWORD}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Invalid Code!!!");
    }
  }
};

//Admin Login API
export const loginAdmin = async (payload) => {
  return axios
    .post(`${ENDPOINT.ADMIN_LOGIN}`, payload)
    .then((response) => response.data);
};

//Admin Logout API
export const logoutAdmin = async () => {
  const token = localStorage.getItem("admin_token");
  return axios
    .post(
      `${ENDPOINT.ADMIN_LOGOUT}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then((response) => response.data);
};

//USER Update Profile API

// USER Updtate Profile API using PUT request
export const updateUserProfilePhoto = async (file) => {
  //to reload after upload
  setUserAuthHeader();
  try {
    const payload = {
      photo: file,
    };
    const response = await axios.put(
      `${ENDPOINT.PROFILE_UPDATE_PHOTO}`,
      payload,
    );
    console.log(response.data);

    //update function after upload
    updateImage(response.data.data);

    return response.data;
  } catch (error) {
    console.error("Error updating photo:", error);
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error.response.data.message);
    }
  }
};

//USER profile update API
export const updateUserProfile = async (payload) => {
  try {
    // Set the Authorization header before making the request
    setUserAuthHeader();

    const response = await axios.put(`${ENDPOINT.PROFILE_UPDATE}`, payload);
    //update function after upload
    updateLocalData(response.data.user);

    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error); // Log the entire error object for better debugging
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error(error.message);
    }
  }
};

//USER Password Update
export const updateUserProfilePassword = async (payload) => {
  try {
    // Set the Authorization header before making the request
    setUserAuthHeader();

    const response = await axios.put(
      `${ENDPOINT.PROFILE_UPDATE_PASSWORD}`,
      payload,
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to update Photo");
    }
  }
};
