import { useRouter } from 'expo-router'
import { useUser } from '../../hooks/useUser'
import ThemedLoader from '../ThemedLoader'
import { useEffect } from 'react'


const UserOnly = ({ children }) => {
    const { authChecked, user } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (authChecked && user === null) {
            router.replace('/login')
        }
    
    }, [authChecked, user])
    
    if (!authChecked || user) {
        return <ThemedLoader />
    }
    
    return children
}

export default UserOnly
