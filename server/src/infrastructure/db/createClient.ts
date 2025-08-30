import { createClient } from "@supabase/supabase-js";
import { CONFIG } from "../../config";

const supabaseUrl = CONFIG.SUPABASE_URL;
const supabaseKey = CONFIG.SUPABASE_KEY;

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;
