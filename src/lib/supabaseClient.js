// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

// These variables are loaded from the .env file in the project root
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Export the client so GuestbookView can use it
export const supabase = createClient(supabaseUrl, supabaseAnonKey)