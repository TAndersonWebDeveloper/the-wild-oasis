import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://wpgrjiitoyccinxhvbqh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwZ3JqaWl0b3ljY2lueGh2YnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0MDEzNzMsImV4cCI6MjAwMzk3NzM3M30.72E4zYk6k8vuBwIlpjhg6MSXpCjKio884JTyIBxUZhw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
