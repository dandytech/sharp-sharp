import { supabase } from "../supabase";

export async function signupProviderApi({
  email,
  password,
  userType,
  fullName,
  gender,
  busAddress,
  phone,
  serviceCategory,
  avatar,
  orgName,
  taxId,
  utilityBill,
  nin,
  experience,
  country,
  state,
  lga,
  city,
  cacNo,
  actName,
  bank,
  bankActType,
  resAddress,
  busPhone,
  serviceName,
  servicePrice,
  serviceDescription,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        userType,
        fullName,
        gender,
        busAddress,
        phone,
        serviceCategory,
        avatar,
        orgName,
        taxId,
        utilityBill,
        nin,
        experience,
        country,
        state,
        lga,
        city,
        cacNo,
        actName,
        bank,
        bankActType,
        resAddress,
        busPhone,
        servives: {
          serviceName,
          servicePrice,
          serviceDescription,
        },
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}
