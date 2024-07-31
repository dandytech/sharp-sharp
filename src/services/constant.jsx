export const BASE_URL = import.meta.env.VITE_BASE_URL;

// Client auth endpoints
export const REGISTER_USER = `/auth/client/register`;
export const CLIENT_VERIFY = `/auth/verify/email`;
export const CLIENT_RESEND_VERIFY = `/auth/resend/verification/email`;
export const LOGIN_USER = `/auth/login`;
export const CLIENT_LOGOUT = `/logout`;

export const PASSWORD_RESET = `/auth/password/email`;
export const CHECK_PASSWORD_CODE = `/auth/password/code/check`;
export const CHANGE_PASSWORD = `/auth/password/reset`;

//Service Provicer Signup endpoint
export const PROVIDER_SIGNUP = `/auth/service/provider/register`;
export const PROVIDER_GET_CAT = `/categories/fetch`;

//Admin auth endpoints
export const ADMIN_LOGIN = `/auth/admin/login`;
export const ADMIN_LOGOUT = `/admin/logout`;

//Admin ServiceCategory endpoints
export const ADMIN_ADD_CAT = `/admin/category/add`;
export const ADMIN_GET_CAT = `/admin/category/fetch`;

export const ADMIN_UPDATE_CAT = `/admin/category/update`;
export const ADMIN_DELETE_CAT = `/admin/category/delete`;

//Profile Update
export const PROFILE_UPDATE = `/profile/update`;
export const PROFILE_UPDATE_PASSWORD = `/profile/update/password`;
export const PROFILE_UPDATE_PHOTO = `/profile/upload/profile-picture`;
