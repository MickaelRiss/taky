import { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRouter } from "expo-router";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [session, setSession] = useState(null)
    const [authChecked, setAuthChecked] = useState(false)
    
    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session)
            setUser(data.session?.user ?? null)
            setAuthChecked(true)
        })

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setUser(session?.user ?? null)
        })

        return () => {
            listener.subscription.unsubscribe()
        }
    }, [])

    async function login(email, password) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) throw new Error(error.message)
        console.log('Je suis connecte')
        setUser(data.session?.user)
        setSession(data.session)
        router.replace('/')
    }

    async function register(email, password) {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        })
        if (error) throw Error(error.message)
        console.log('Je suis sauvegarde en DB')
        await login(email, password)
    }

    const value = {
        user,
        session,
        authChecked,
        login,
        register
    }

    return (
        <UserContext.Provider value={value}>
            { children }
        </UserContext.Provider>
    )
}