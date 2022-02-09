import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View, ActivityIndicator } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { timeoutPromise } from '../helpers/timeoutPromise'
// import {GoogleSignin,GoogleSigninButton} from '@react-native-google-signin/google-signin'
const API_URL = Platform.OS === 'ios' ? 'http://192.168.1.23:5000' : 'http://192.168.1.23:5000'
// GoogleSignIn.configure({
//   webClientId:'744018957088-ipc1pitmlhgd6bthmbk1232c85bvnh8v.apps.googleusercontent.com',
//   offlineAccess:true
// })
export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = async () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }

    let response = fetch(`${API_URL}/api/users/authenticate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ 'username': email.value, 'password': password.value })
    },2000);
    response=timeoutPromise(2000,response);
    response.then(response => response.json()).then(response => {

      if (response.success) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'HomeTabView' }],
        })
      } else {
        setPassword({ ...password, error: "Please enter correct username and password." })

        console.log("invalid user");
        return
      }
    }).catch(e => {
      console.log(e);
      setPassword({ ...password, error: "sorry either your internet connection is down or something went wrong from our side." })
    });

  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      {/* <GoogleSigninButton></GoogleSigninButton> */}

      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0c9" />
        <Text>Loading...</Text>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start'
  }
})
