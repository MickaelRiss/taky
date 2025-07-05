import { createContext, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { supabase } from "../lib/supabase";

export const MedicationsContext = createContext()

export const MedicationsProvider = ({ children }) => {
    const { user } = useUser()
    const [ loading, setLoading ] = useState(false)
    const [ medications, setMedications ] = useState([])

    async function fetchMedications () {
        setLoading(true)

        try {
            
            const { data, error } = await supabase
                .from('medications')
                .select('*')
                .eq('user_id', user?.id)
                .order('created_at', { ascending: false});
            
            setMedications(data)
            setLoading(false)

        } catch (error) {
            console.log(error.message)
        }
    }

    async function addMedication (newMed) {
        try {
            const { data, error } = await supabase
                .from('medications')
                .insert({ 
                    user_id: user?.id,
                    name: newMed.name,
                    dose: newMed.dose,
                    unit: newMed.unit ? newMed.unit : newMed.dose,
                    frequency: newMed.frequency,
                    start_date: newMed.startDate || new Date().toISOString().split('T')[0],
                    end_date: newMed.endDate ? newMed.endDate : null,
                    time_of_day: newMed.timeOfDay ? [newMed.timeOfDay] : [],
                    notes: newMed.notes ? newMed.notes : null,
                })
                .select()
            setMedications((prev) => [data[0], ...prev])
            fetchMedications()
            setLoading(false)

        } catch (error) {
            console.log(error.message)
        }
    }

    async function removeMedication (id) {
        try {
            const { error } = supabase
                .from('medications')
                .delete()
                .eq('id', id)
            
                setMedications((prev) => prev.filter((med) => med.id !== id))
                fetchMedications()
                
        } catch (error) {
            console.log(error.message)
        }
    }

    const value = {
        medications,
        loading,
        fetchMedications,
        addMedication,
        removeMedication
    }

    useEffect(() => {
        if (user?.id) {
            fetchMedications()
        }
    }, [user?.id])


    return (
        <MedicationsContext.Provider value={value}>
            { children }
        </MedicationsContext.Provider>
    )
}