 import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CountScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter Screen! 🏘️</Text>

      <Text style={styles.counterText}>{count}</Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity
          style={styles.plusButton}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>เพิ่มค่า (+)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.minusButton}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>ลดค่า (-)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.resetButton}
          onPress={() => setCount(0)}
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e384bf',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  counterText: {
    fontSize: 150,
    fontWeight: 'bold',
    marginVertical: 40,
  },

  buttonContainer: {
    alignItems: 'center',
    gap: 10,
  },

  plusButton: {
    backgroundColor: '#204a05',
    width: 180,
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
  },

  minusButton: {
    backgroundColor: '#5f0b0b',
    width: 180,
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
  },

  resetButton: {
    backgroundColor: '#000000',
    width: 180,
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CountScreen;