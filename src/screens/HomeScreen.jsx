// src/screens/HomeScreen.jsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Gravity Home Tuition</Text>
        <Text style={styles.tagline}>Empowering Learning at Your Doorstep</Text>
      </View>

      {/* Hero Section */}
      <View style={styles.hero}>
        <Text style={styles.heroText}>Find the Perfect Tutor for Your Child</Text>
        <TouchableOpacity style={styles.heroButton}>
          <Text style={styles.heroButtonText}>Find a Tutor</Text>
        </TouchableOpacity>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📘 About Us</Text>
        <Text style={styles.sectionText}>
          We are Nepal's leading home tuition solution, offering verified and experienced tutors
          for students from school level to bachelor and competitive exam preparation.
        </Text>
      </View>

      {/* Why Choose Us */}
      <View style={styles.sectionAlt}>
        <Text style={styles.sectionTitle}>🎯 Why Choose Us</Text>
        {[
          'Verified, Experienced Tutors',
          'One-to-One Focused Learning',
          'Custom Schedules & Subjects',
          'Safe & Trusted Professionals',
        ].map((reason, i) => (
          <View style={styles.bullet} key={i}>
            <FontAwesome name="check" size={18} color="#27ae60" />
            <Text style={styles.bulletText}>{reason}</Text>
          </View>
        ))}
      </View>

      {/* Services Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛠️ Our Services</Text>

        <View style={styles.serviceCard}>
          <Text style={styles.cardTitle}>🏠 Home Tuition</Text>
          <Text style={styles.cardText}>
            One-on-one personalized teaching at your place. Choose from top tutors across Nepal.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.cardTitle}>🔍 Tutor Hiring</Text>
          <Text style={styles.cardText}>
            Easily hire tutors for any class, level or subject. We handle screening for you.
          </Text>
        </View>

        <View style={styles.serviceCard}>
          <Text style={styles.cardTitle}>💼 Educational Consulting</Text>
          <Text style={styles.cardText}>
            Not sure what to study? We provide expert guidance for your academic journey.
          </Text>
        </View>
      </View>

      {/* Call To Action */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaText}>Need a tutor? Let us help you!</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Request a Tutor</Text>
        </TouchableOpacity>
      </View>

      {/* Contact Info */}
      <View style={styles.sectionAlt}>
        <Text style={styles.sectionTitle}>📞 Contact Us</Text>
        <Text>Email: gravitytuition@gmail.com</Text>
        <Text>Phone: +977-9860084227</Text>
        <Text>Location: Kathmandu, Nepal</Text>
        <TouchableOpacity
          style={styles.emailButton}
          onPress={() => Linking.openURL('mailto:gravitytuition@gmail.com')}
        >
          <Text style={styles.emailButtonText}>Send Email</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Gravity Home Tuition Solution</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // Header
  header: {
    backgroundColor: '#2e86de',
    padding: 30,
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  tagline: {
    color: '#dff9fb',
    fontSize: 14,
    marginTop: 5,
    fontStyle: 'italic',
  },

  // Hero
  hero: {
    backgroundColor: '#dff9fb',
    padding: 30,
    alignItems: 'center',
  },
  heroText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#130f40',
    textAlign: 'center',
    marginBottom: 15,
  },
  heroButton: {
    backgroundColor: '#0984e3',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  heroButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  // Section Styles
  section: {
    padding: 25,
    backgroundColor: '#fff',
  },
  sectionAlt: {
    padding: 25,
    backgroundColor: '#f1f2f6',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 15,
    color: '#636e72',
  },

  bullet: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  bulletText: {
    marginLeft: 10,
    fontSize: 15,
    color: '#2d3436',
  },

  // Services
  serviceCard: {
    backgroundColor: '#ecf0f1',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#2c3e50',
  },
  cardText: {
    fontSize: 14,
    color: '#34495e',
  },

  // Call To Action
  ctaSection: {
    backgroundColor: '#55efc4',
    padding: 30,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#2d3436',
  },
  ctaButton: {
    backgroundColor: '#00b894',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  emailButton: {
    marginTop: 15,
    backgroundColor: '#0984e3',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  emailButtonText: {
    color: '#fff',
    fontSize: 14,
  },

  // Footer
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#dcdde1',
  },
  footerText: {
    fontSize: 13,
    color: '#636e72',
  },
});
