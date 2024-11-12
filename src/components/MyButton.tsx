import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

// type MyButtonProps 
const MyButton = ({ label, onPress, disabled, style } ) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.container, style]}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 100,
    backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
})