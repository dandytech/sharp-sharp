import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mdojvabjogjvhpvretdf.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kb2p2YWJqb2dqdmhwdnJldGRmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM3NzUyNzMsImV4cCI6MjAyOTM1MTI3M30.o-VvmRy_6qasovqud2oiIJwKQSF5ETgxGdP_xgQgi0U";

export const supabase = createClient(supabaseUrl, supabaseKey);
