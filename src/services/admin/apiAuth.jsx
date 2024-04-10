import { supabase } from "../supabase";

export async function apiAdminLogin({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function apiAdminLogout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
