import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

const supabaseUrl = 'https://yocceiggjfjogjbrveom.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlvY2NlaWdnamZqb2dqYnJ2ZW9tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzgxNjYsImV4cCI6MjA2NjM1NDE2Nn0.TsjmfiC38ye0ZnIamwq2F4AWo2F1lETk6ibfN18fECM'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
})