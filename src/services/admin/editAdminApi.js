import { supabase, supabaseUrl } from "../supabase";

export async function updateCurrentAdmin({
  //profile & Password
  password,
  fullName,
  avatar,
  phone,
  gender,
  resAddress,
  userType,
}) {
  let updateData = {};
  //profile & Password
  if (password) updateData.password = password;
  if (fullName) updateData.fullName = fullName;
  if (phone) updateData.phone = phone;
  if (gender) updateData.gender = gender;
  if (resAddress) updateData.resAddress = resAddress;
  if (userType) updateData.userType = userType;

  const { data, error } = await supabase.auth.updateUser({
    data: updateData,
    password: updateData.password,
  });

  if (error) throw new Error(error.message);

  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const uploadPromises = [];

  if (avatar) {
    uploadPromises.push(
      supabase.storage.from("avatars").upload(fileName, avatar),
    );
  }

  try {
    await Promise.all(uploadPromises);

    const updatedData = {};
    if (avatar) {
      const updatedAvatarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`;
      updatedData.avatar = updatedAvatarUrl;
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
