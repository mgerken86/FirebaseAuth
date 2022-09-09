import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          // value={}
          // onChangeText={text => }
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          // value={}
          // onChangeText={text => }
          style={styles.input}
          secureTextEntry
        />

      </View>
      <Text>Login Screen</Text>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})