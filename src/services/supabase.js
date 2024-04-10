import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eqhvyxwsdsnmjejqenrn.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxaHZ5eHdzZHNubWplanFlbnJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI2NTU3NjksImV4cCI6MjAyODIzMTc2OX0.VNG8k_oXnnVJMa-UAuqE_-_AQIHyLsr5g39N6Q_aIxI";

export const supabase = createClient(supabaseUrl, supabaseKey);
