import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

export default function App() {

  const handlePayment = () => {
    const options = {
      description: "Sachin's Payment",
      image: "https://your-company-logo-url.com/logo.png", // Replace with your logo URL
      currency: "INR",
      key: "rzp_test_JVghhtQ2c5Ur2q", // Replace with your Razorpay API key
      amount: "10000", // Amount in paise (10000 paise = 100 INR)
      name: "Sachin",
      prefill: {
        email: "sachin@gmail.com",
        contact: "6364497927",
        name: "Sachin",
      },
      theme: { color: "#F37254" },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        // success
        Alert.alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // failure
        Alert.alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          style={styles.logo}
          source={{ uri: 'https://your-company-logo-url.com/logo.png' }} // Add your logo URL here
        />
        <Text style={styles.headerText}>Make a Payment</Text>
        <Text style={styles.amountText}>Amount: ₹100</Text>
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '90%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 15,
    borderRadius: 40,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  amountText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  payButton: {
    backgroundColor: '#F37254',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
