import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function ContactScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      Alert.alert('Missing Fields', 'Please fill in all required fields.');
      return;
    }
    Alert.alert('Success', 'Your message has been sent!');
    setForm({ name: '', email: '', phone: '', address: '', message: '' });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>📞 Contact Us</Text>
        <Text style={styles.subtitle}>Home → Contact Us</Text>
      </View>

      {/* Info Cards */}
      <View style={styles.cardSection}>
        <View style={styles.card}>
          <FontAwesome name="map-marker" size={30} color="#f39c12" />
          <Text style={styles.cardTitle}>Office Address</Text>
          <Text style={styles.cardText}>
            KL Tower, 3rd Floor, Chabahil, Kathmandu
          </Text>
        </View>

        <View style={styles.card}>
          <FontAwesome name="phone" size={30} color="#27ae60" />
          <Text style={styles.cardTitle}>Phone</Text>
          <Text style={styles.cardText}>+977 9851407153</Text>
        </View>

        <View style={styles.card}>
          <FontAwesome name="envelope" size={30} color="#e74c3c" />
          <Text style={styles.cardTitle}>Email</Text>
          <Text style={styles.cardText}>gravityhometuition@gmail.com</Text>
        </View>
      </View>

      {/* Map */}
      <TouchableOpacity
        style={styles.mapBox}
        onPress={() =>
          Linking.openURL(
            'https://www.google.com/maps/place/KL+Tower,+Chabahil,+Kathmandu,+Nepal'
          )
        }
      >
        <Text style={styles.mapTitle}>📍 View Location on Google Maps</Text>
      </TouchableOpacity>

      {/* Contact Form */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>💬 Get In Touch</Text>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={form.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={form.email}
            keyboardType="email-address"
            onChangeText={(text) => handleChange('email', text)}
          />
        </View>

        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={form.phone}
            keyboardType="phone-pad"
            onChangeText={(text) => handleChange('phone', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={form.address}
            onChangeText={(text) => handleChange('address', text)}
          />
        </View>

        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Message"
          value={form.message}
          multiline
          numberOfLines={4}
          onChangeText={(text) => handleChange('message', text)}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Gravity Home Tuition Solution | Kathmandu, Nepal
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  // Header
  header: {
    backgroundColor: '#273c75',
    padding: 30,
    alignItems: 'center',
  },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
  subtitle: { color: '#dcdde1', fontSize: 14, marginTop: 5 },

  // Contact Cards
  cardSection: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'dashed',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 2,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
    color: '#2d3436',
  },
  cardText: {
    color: '#636e72',
    marginTop: 6,
    textAlign: 'center',
  },

  // Map
  mapBox: {
    backgroundColor: '#dff9fb',
    padding: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
  },
  mapTitle: {
    color: '#0984e3',
    fontSize: 16,
    fontWeight: '600',
  },

  // Form
  formContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2d3436',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f2f6',
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 5,
    fontSize: 14,
    color: '#2d3436',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#f39c12',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // Footer
  footer: {
    backgroundColor: '#2c3e50',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#bdc3c7',
    fontSize: 13,
    textAlign: 'center',
  },
});
