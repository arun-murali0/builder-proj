import { createClient } from '@supabase/supabase-js';
import { CONFIG } from '../../../interface/config';

const supabaseKey = CONFIG.SUPABASE_KEY;
const supabaseURL = CONFIG.SUPABASE_URL;

const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
