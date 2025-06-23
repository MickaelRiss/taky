import { StyleSheet, Image } from "react-native"
import logo from '../assets/logo.png'

const Logo = ({style, ...props}) => {
  return (
    <Image
      source={logo}
      {...props}
      style={[styles.logo, style]}
    />
  )
}

export default Logo

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
  }
})
