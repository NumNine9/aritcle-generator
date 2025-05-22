// supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://ejwosyxbkqugqzbcjbjl.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqd29zeXhia3F1Z3F6YmNqYmpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxMTQyNTIsImV4cCI6MjA2MTY5MDI1Mn0.w3q63Q5KbuzWcHK7LvSLh4rMBq-_eJ12cyNbFvlBk9I";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
