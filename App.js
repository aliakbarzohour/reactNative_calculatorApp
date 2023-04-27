
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
export default function App() {
  const [result, setResult] = useState('');

  const handleButtonPress = (buttonValue) => {
    if (buttonValue === '=') {
      calculateResult();
    } else if (buttonValue === 'C') {
      resetCalculator();
    } else {
      setResult((prevResult) => prevResult + buttonValue);
    }
  };

  const calculateResult = () => {
    setResult(eval(result).toString());
  };

  const resetCalculator = () => {
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{result}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
      </View>
      <TouchableOpacity style={styles.clearButton} onPress={resetCalculator}>
        <Text style={styles.buttonText}>C</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    padding: 20,
    borderRadius: 50,
    margin: 10,
    backgroundColor: '#DDDDDD',
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333333',
  },
  clearButton: {
    padding: 20,
    width: '65%',
    borderRadius: 50,
    margin: 10,
    backgroundColor: 'orange',
  },
  display: {
    width: '90%',
    margin: 10,
    padding: 20,
    borderRadius: 50,
    alignSelf: 'stretch',
    textAlign: 'right',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#333333',
  },
});
