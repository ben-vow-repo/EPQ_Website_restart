import { createClient } from '@supabase/supabase-js'

// Replace these placeholders with the actual text keys from your Supabase dashboard
const supabaseUrl = 'https://zinlbtzvafqlboqdjgby.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppbmxidHp2YWZxbGJvcWRqZ2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzNzUzNDYsImV4cCI6MjEwMzk1MTM0Nn0.KqmBYxnlsk-QiP3vYGM2KPXlYHItD5HllVA95rpHZNc'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)