import { supabase, supabaseUrl } from "../supabase";

export async function updateCurrentUser({
  password,
  fullName,
  avatar,
 
}) {
  //1. update password OR others
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };
 
  const { data, error } = await supabase.auth.updateUser(updateData);

  if (error) throw new Error(error.message);

  if (!avatar) return data;

  //2. upload the avatar image, Note: set your supabase bucket and the policy
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars") //image bucket name in supabase
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  //3. Update avatar in the user
  const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
    data: {
      //upload an image and get the url of the supabase avatar and then modify it as below
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);
  return updatedUser;
}
