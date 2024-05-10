import { supabase, supabaseUrl } from "../supabase";

export async function updateCurrentUser({
  //profile & Password
  password,
  fullName,
  avatar,
  phone,
  gender,
  resAddress,

  //Kyc General info
  orgName,
  cacNo,
  taxId,
  utilityBill,
  busPhone,
  nin,
  experience,
  country,
  state,
  lga,
  city,

  //service Info
  serviceName,
  servicePrice,
  serviceDescription,

  //Bank Info
  actName,
  actNo,
  bankActType,
  bankName,

  //kyc Approved
  kyCApproved,
}) {
  let updateData = {};
  //profile & Password
  if (password) updateData.password = password;
  if (fullName) updateData.fullName = fullName;
  if (phone) updateData.phone = phone;
  if (gender) updateData.phone = gender;
  if (resAddress) updateData.resAddress = resAddress;

  //Kyc General info
  if (orgName) updateData.orgName = orgName;
  if (cacNo) updateData.cacNo = cacNo;
  if (taxId) updateData.taxId = taxId;
  if (busPhone) updateData.busPhone = busPhone;
  if (nin) updateData.nin = nin;
  if (experience) updateData.experience = experience;
  if (country) updateData.country = country;
  if (state) updateData.state = state;
  if (lga) updateData.lga = lga;
  if (city) updateData.city = city;

  //service info
  if (serviceName) updateData.serviceName = serviceName;
  if (servicePrice) updateData.servicePrice = servicePrice;
  if (serviceDescription) updateData.serviceDescription = serviceDescription;

  //Bank Info
  if (actName) updateData.actName = actName;
  if (actNo) updateData.actNo = actNo;
  if (bankActType) updateData.actType = bankActType;
  if (bankName) updateData.bankName = bankName;

  //kyc approved
  if (kyCApproved) updateData.kyCApproved = kyCApproved;

  const { data, error } = await supabase.auth.updateUser({
    data: updateData,
    password: updateData.password,
  });

  if (error) throw new Error(error.message);

  if (!avatar && !utilityBill) return data;

  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const fileName2 = `utilityBill-${data.user.id}-${Math.random()}`;

  const uploadPromises = [];

  if (avatar) {
    uploadPromises.push(
      supabase.storage.from("avatars").upload(fileName, avatar),
    );
  }

  if (utilityBill) {
    uploadPromises.push(
      supabase.storage.from("utilityBills").upload(fileName2, utilityBill),
    );
  }

  try {
    await Promise.all(uploadPromises);

    const updatedData = {};
    if (avatar) {
      const updatedAvatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
      updatedData.avatar = updatedAvatarUrl;
    }

    if (utilityBill) {
      const updatedUtilityBillUrl = `${supabaseUrl}/storage/v1/object/public/utilityBills/${fileName2}`;
      updatedData.utilityBill = updatedUtilityBillUrl;
    }

    const { data: updatedUser, error: updateError } =
      await supabase.auth.updateUser({
        data: updatedData,
      });

    if (updateError) {
      console.log(updateError, "update error");
      throw new Error(updateError.message);
    }

    return updatedUser;
  } catch (uploadError) {
    console.log(uploadError, "upload error");
    throw new Error(uploadError.message);
  }
}
