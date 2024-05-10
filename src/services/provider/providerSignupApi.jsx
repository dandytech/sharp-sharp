import { supabase } from "../supabase";

export async function signupProviderApi({
  email,
  password,

  fullName,
  gender,
  busAddress,
  phone,
  serviceCategory,
  avatar,
  userType,
  resAddress,

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
  bankName,
  bankActType,
  busPhone,
  serviceName,
  servicePrice,
  serviceDescription,
  kycApproved,
}) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        gender,
        busAddress,
        phone,
        serviceCategory,
        avatar,
        userType,
        resAddress,

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
        bankName,
        bankActType,
        busPhone,
        services: [{
          serviceName,
          servicePrice,
          serviceDescription,
        }],
        kycApproved,
      },
    },
  });

  if (error) throw new Error(error.message);
  console.log(error.message);
  return data;
}
