import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity } from 'react-native';

function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/image1.png')} style={styles.image} />
      <Text style={{ fontFamily: 'Poppins-Regular', color: '#48FF91', fontSize: 25, fontWeight: '700' }}>Sign Up</Text>
      <Text style={{ fontFamily: 'Poppins-Regular', color: '#7AFFD1', fontSize: 15, fontWeight: '500', marginBottom: 20 }}>
        Create a new account
      </Text>

      {/* Username Input */}
      <View style={styles.inputContainer}>
        <Image source={require('../assets/user.png')} style={styles.icon} />
        <TextInput
          style={[styles.input, { borderWidth: 0, outlineWidth: 0 }]}
          placeholder="Username"
          placeholderTextColor="#009155"
          onChangeText={(text) => setUsername(text)}
          value={username}
          backgroundColor="#EBFDF2"
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Image source={require('../assets/email icon.png')} style={styles.icon} />
        <TextInput
          style={[styles.input, { borderWidth: 0, outlineWidth: 0 }]}
          placeholder="Email"
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

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Sign Up')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>OR continue with</Text>
        <View style={styles.divider}></View>
      </View>
      <View style={styles.bottomIcons}>
        
        <Image source={require('../assets/google.png')} style={{width:40,height:40}}/>
        <Image source={require('../assets/facebook.png')} style={{width:40,height:40}}/>
        <Image source={require('../assets/apple.png')} style={{width:40,height:40}}/>
        
        </View>
      {/* Redirect to Sign In */}
      <View style={{ marginTop: 60, flexDirection: 'row' }}>
        <Text style={{ fontFamily: 'Poppins-Regular', color: '#DAFFD2', fontSize: 15, fontWeight: '500' }}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{ fontFamily: 'Poppins-Regular', color: '#48FF91', fontSize: 15, fontWeight: '500' }}>
            Sign In
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
    paddingTop:100,
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '80%',
  },
  divider: {
    flex: 1, 
    height: 1,
    backgroundColor: '#6C7F70',
  },
  dividerText: {
    marginHorizontal: 10,
    fontFamily: 'Poppins-Regular',
    color: '#DEFFEB',
    fontSize: 15,
  },
  bottomIcons:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    width:'60%'
  },

});

export default SignUp;
