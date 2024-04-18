import { supabase } from "../supabase";

export async function getCurrentProvider() {
  const { data: session } = await supabase.auth.getSession(); //grap data from local storage

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  console.log(data, error);
  
  return data?.user;
}
