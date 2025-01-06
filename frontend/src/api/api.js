import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ljmuomsfouaxhinmmuwx.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqbXVvbXNmb3VheGhpbm1tdXd4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxODE3MzEsImV4cCI6MjA1MTc1NzczMX0.LpH-pCTJwBIYYdEACcr3JHBnLXPZiAcE7Z_1VfS0qiw";
export const supabase = createClient(supabaseUrl, supabaseKey);
