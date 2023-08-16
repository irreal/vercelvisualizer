import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_HOST } from '$env/static/public';
import { createClient } from '@supabase/supabase-js';

const client = createClient(PUBLIC_SUPABASE_HOST, PUBLIC_SUPABASE_ANON_KEY);

export default client;
