import { View } from "react-native"
import { Colors } from '../../constants/Colors'
import { useState } from "react"

const Status = ({ medTake= false, style, ...props }) => {

    return (
        <View 
            style={[{ 
                backgroundColor: medTake ? Colors.success : Colors.error,
                width: 16,
                height: 16,
                borderRadius: 100
            }, style ]}
            {...props}
        />    
    )
}

export default Status
