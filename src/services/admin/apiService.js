import toast from "react-hot-toast";
import { supabase } from "../supabase";

export async function apiAddCategories({ catName, catCharge, catDescription }) {
  const { data, error } = await supabase
    .from("serviceCategories")
    .insert([{ catName, catCharge, catDescription }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

export async function getCategories() {
  const { data, error } = await supabase.from("serviceCategories").select("*");

  if (error) {
    console.error(error);
    throw new Error("Categories could not be loaded");
  }

  return data;
}

export async function updateCategoryApi(id, obj) {
  try {
    console.log("Updating category with id:", id);
    console.log("Update payload:", obj);

    const { data, error } = await supabase
      .from("serviceCategories")
      .update(obj)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.log(error);
      throw new Error("category could not be updated");
    }

    console.log("Category updated successfully:", data);
    return data;
  } catch (error) {
    console.error("Error updating category:", error);
    throw new Error("Category could not be updated");
  }
}

export async function deleteCategoryApi(id) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase
    .from("serviceCategories")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Category could not be deleted");
  }
  return data;
}
