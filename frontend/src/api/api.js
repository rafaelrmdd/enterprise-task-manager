import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://ljmuomsfouaxhinmmuwx.supabase.co";
const supabaseKey = process.env.SUPABASE_SECRET_API_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
