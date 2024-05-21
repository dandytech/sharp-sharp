export const BASE_URL = import.meta.env.VITE_BASE_URL;

// Client auth endpoints
export const REGISTER_USER = `/auth/client/register`;
export const CLIENT_VERIFY = `/auth/verify/email`;
export const CLIENT_RESEND_VERIFY = `/auth/resend/verification/email`;
export const LOGIN_USER = `/auth/login`;
export const CLIENT_LOGOUT = `/logout`;

//Service Provicer Signup endpoint
export const PROVIDER_SIGNUP = `/auth/service/provider/register`;

//Admin auth endpoints
export const ADMIN_LOGIN = `/auth/admin/login`;
export const ADMIN_LOGOUT = `/admin/logout`;

//Admin ServiceCategory endpoints
export const ADMIN_ADD_CAT = `/admin/category/add`;
export const ADMIN_GET_CAT = `/admin/category/fetch`;
export const ADMIN_UPDATE_CAT = `/admin/category/update`;
export const ADMIN_DELETE_CAT = `/admin/category/delete`;
