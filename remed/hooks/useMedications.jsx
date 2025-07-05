import { useContext } from 'react'
import { MedicationsContext } from '../contexts/MedicationsContext'

export function useMedications () {
    const context = useContext(MedicationsContext)

    if (!context) {
        throw new Error('Medications must be used within a MedicationsProvider')
    }

    return context
}