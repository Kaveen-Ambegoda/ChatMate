import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for remember me checkbox

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image1.png')} style={styles.image} />
      <Text style={{ fontFamily: 'Poppins-Regular', color: '#48FF91', fontSize: 25, fontWeight: '700' }}>Sign In</Text>
      <Text style={{ fontFamily: 'Poppins-Regular', color: '#7AFFD1', fontSize: 15, fontWeight: '500', marginBottom: 20 }}>
        Log in to your account
      </Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image source={require('../assets/email icon.png')} style={styles.icon} />
        <TextInput
          style={[styles.input, { borderWidth: 0, outlineWidth: 0 }]}
          placeholder="Ravibxr802133@gmail.com"
          placeholderTextColor="#009155"
          onChangeText={(text) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          backgroundColor="#EBFDF2"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Image source={require('../assets/password icon.png')} style={styles.icon} />
        <TextInput
          style={[styles.input, { borderWidth: 0, outlineWidth: 0 }]}
          placeholder="Password"
          placeholderTextColor="#009155"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
      </View>

      {/* Remember Me and Forgot Password */}
      <View style={styles.bottomTextContainer}>
        <View style={styles.rememberMeContainer}>
          <TouchableOpacity onPress={() => setRememberMe(!rememberMe)} style={styles.checkbox}>
            {rememberMe && <View style={styles.checked} />}
          </TouchableOpacity>
          <Text style={styles.bottomText}>Remember Me</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.bottomText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

        <View style={{marginTop:60, flexDirection:'row'}}>
        <Text style={{ fontFamily: 'Poppins-Regular', color: '#DAFFD2', fontSize: 15, fontWeight: '500' }}>Don't have an account?{' '}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{ fontFamily: 'Poppins-Regular', color: '#48FF91', fontSize: 15, fontWeight: '500' }}>
         Sign Up
         </Text>
  </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  image: {
    position: 'absolute',
    top: 0,
    right: -15,
    width: 250,
    height: 300,
    resizeMode: 'contain',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    backgroundColor: '#EBFDF2',
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 50,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#009155',
    fontFamily: 'Poppins-Regular',
  },
  bottomTextContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    width: '80%',
    marginTop: 10,
    marginBottom: 30,
  },
  bottomText: {
    color: '#7AFFD1',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#7AFFD1',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#48FF91', 
    borderRadius: 3,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#19DE72',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  

 
});

export default SignIn;
