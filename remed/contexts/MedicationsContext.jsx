import { createContext, useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import { supabase } from "../lib/supabase";

export const MedicationsContext = createContext()

export const MedicationsProvider = ({ children }) => {
    const { user } = useUser()
    const [ loading, setLoading ] = useState(false)
    const [ medications, setMedications ] = useState([])
    const [error, setError] = useState(null)

    const getMedications = async () => {
        setLoading(true) 
        
        const { data, error } = await supabase
            .from('medications')
            .select('*')
            .eq('user_id', user?.id)
            .order('created_at', { ascending: false});

        if (error) throw Error (error.message)

        setMedications(data)
        setLoading(false)
    }

    const addMedication = async (newMed) => {
        const { data, error } = await supabase
            .from('medications')
            .insert({ 
                user_id: user?.id,
                name: newMed.name,
                dose: newMed.dose,
                unit: newMed.unit,
                frequency: newMed.frequency,
                start_date: newMed.startDate,
                end_date: newMed.endDate,
                time_of_day: newMed.timeOfDay,
                notes: newMed.notes,
            })
            .select()

            if (error) throw Error (error.message)

            setMedications((prev) => [data[0], ...prev])
    }

    const removeMedication = async(id) => {

        const { error } = supabase
            .from('medications')
            .delete()
            .eq('id', id)

            if (error) throw Error (error.message)

            setMedications((prev) => prev.filter((med) => med.id !== id))
            
        }

    const value = {
        medications,
        loading,
        getMedications,
        addMedication,
        removeMedication
    }

    useEffect(() => {
        if (user?.id) {
            getMedications()
        }
    }, [user?.id])


    return (
        <MedicationsContext.Provider value={value}>
            { children }
        </MedicationsContext.Provider>
    )
}