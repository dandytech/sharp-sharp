import { supabase } from "../supabase";

export async function getAllProviders() {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("usertype", "provider");

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
}
