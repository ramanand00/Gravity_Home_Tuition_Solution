// src/screens/AboutScreen.jsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>About Us</Text>
        <Text style={styles.headerSubtitle}>
          Learn more about Gravity Home Tuition Solution — our story, mission, and impact.
        </Text>
      </View>

      {/* Company Overview */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌟 Who We Are</Text>
        <Text style={styles.sectionText}>
          Gravity Home Tuition Solution is a Kathmandu-based home tuition provider committed to making
          quality education accessible to every student by bringing expert tutors to your doorstep.
        </Text>
      </View>

      {/* Mission */}
      <View style={styles.sectionAlt}>
        <Text style={styles.sectionTitle}>🎯 Our Mission</Text>
        <Text style={styles.sectionText}>
          To revolutionize personalized learning by connecting students with highly qualified tutors who
          nurture, mentor, and elevate academic performance in the comfort of home.
        </Text>
      </View>

      {/* Vision */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🚀 Our Vision</Text>
        <Text style={styles.sectionText}>
          A Nepal where every learner, regardless of background or location, has access to affordable and
          quality education delivered personally and professionally.
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsSection}>
        <View style={styles.statBox}>
          <FontAwesome name="user" size={30} color="#0984e3" />
          <Text style={styles.statNumber}>500+</Text>
          <Text style={styles.statLabel}>Tutors</Text>
        </View>
        <View style={styles.statBox}>
          <FontAwesome name="graduation-cap" size={30} color="#00b894" />
          <Text style={styles.statNumber}>2000+</Text>
          <Text style={styles.statLabel}>Students</Text>
        </View>
        <View style={styles.statBox}>
          <FontAwesome name="book" size={30} color="#fdcb6e" />
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Subjects</Text>
        </View>
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaText}>Want to join our tutor community or need a tutor?</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Get Started</Text>
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
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    padding: 30,
    backgroundColor: '#2e86de',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: '#dff9fb',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
  section: {
    padding: 25,
    backgroundColor: '#ffffff',
  },
  sectionAlt: {
    padding: 25,
    backgroundColor: '#f1f2f6',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 15,
    color: '#636e72',
    lineHeight: 22,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    backgroundColor: '#ecf0f1',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2d3436',
    marginTop: 6,
  },
  statLabel: {
    fontSize: 13,
    color: '#636e72',
  },
  ctaSection: {
    backgroundColor: '#55efc4',
    padding: 30,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: '#2d3436',
    marginBottom: 15,
    fontWeight: '600',
    textAlign: 'center',
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
