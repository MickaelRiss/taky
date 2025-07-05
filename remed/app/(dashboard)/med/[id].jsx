import ThemedView from '../../../components/ThemedView'
import ThemedText from '../../../components/ThemedText'

const MedDetails = ({ med }) => {
    return (
        <ThemedView>
            <ThemedText>{med.name}</ThemedText>
        </ThemedView>
    )
}

export default MedDetails
