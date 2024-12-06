import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';

function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/image1.png')} style={styles.image} />
      <Text style={{ color: 'white', fontSize: 32, marginBottom: 20, fontFamily: 'Inter-Regular' }}>
        Meet <Text style={{ color: '#6CFF9A', fontSize: 32, fontFamily: 'Inter-Regular' }}>ChatMate</Text>
      </Text>
      <Text style={{ color: 'white', fontSize: 25, fontFamily: 'Inter-Regular', fontWeight: 600, marginBottom: 10 }}>
        Your Own AI Assistant
      </Text>
      <Text style={{ color: '#FFF', fontSize: 16, fontFamily: 'Roboto-Regular' }}>
        Ask Your questions and receive articles using
      </Text>
      <Text style={{ color: '#FFF', fontSize: 16, fontFamily: 'Roboto-Regular', marginBottom: 20 }}>
        artificial intelligence assistant
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 350,
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

export default StartScreen;
