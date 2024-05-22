import axios from "axios";
import * as ENDPOINT from "../constant";

axios.defaults.baseURL = ENDPOINT.BASE_URL;
axios.defaults.headers.common["Authorization"] = "";

//Clinet Signup API
// export const registerClient = async (payload) => {
//   return axios
//     .post(`${ENDPOINT.REGISTER_USER}`, payload)
//     .then((response) => response.data);
// };

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

//Update Profile API

// Admin Updtate Profile API using PUT request
export const updateProfile = async (payload) => {
  try {
    // Set the Authorization header before making the request
    setAuthHeader();

    const response = await axios.post(`${ENDPOINT.PROFILE_UPDATE}`, payload);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Failed to update Profile");
    }
  }
};
