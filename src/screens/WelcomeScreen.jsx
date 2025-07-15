// src/screens/WelcomeScreen.jsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2e86de" barStyle="light-content" />

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')} // <-- Replace with your app logo
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.appName}>Gravity Tuition</Text>
      </View>

      {/* Tagline */}
      <Text style={styles.tagline}>Personalized Learning at Your Doorstep</Text>
      <Text style={styles.description}>
        Welcome to Gravity Home Tuition Solution – connecting passionate tutors with students
        across Nepal. Let's begin your learning journey.
      </Text>

      {/* Buttons */}
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('ContactScreen')}
        >
          <Text style={styles.secondaryButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>© 2025 Gravity Home Tuition Solution</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  logo: {
    width: 100,
    height: 100,
  },
  appName: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e86de',
    marginTop: 10,
  },
  tagline: {
    fontSize: 18,
    color: '#2d3436',
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    color: '#636e72',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
  },
  buttonGroup: {
    marginTop: 30,
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#2e86de',
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },
  primaryButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: '#dff9fb',
    padding: 12,
    borderRadius: 10,
  },
  secondaryButtonText: {
    color: '#2e86de',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
  footerText: {
    position: 'absolute',
    bottom: 20,
    fontSize: 12,
    color: '#b2bec3',
  },
});
