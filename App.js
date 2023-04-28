import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MathJS from 'mathjs';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: '',
      calculation: '',
    }
  }

  handleInput = (input) => {
    if (input === '=') {
      let result = '';
      try {
        result = MathJS.eval(this.state.calculation);
      } catch (error) {
        result = 'Math Error';
      }
      this.setState({
        result: result,
        calculation: '',
      });
    } else if (input === 'C') {
      this.setState({
        result: '',
        calculation: '',
      });
    } else {
      this.setState({
        calculation: this.state.calculation + input,
      });
    }
  }

  render() {
    const buttons = [['C', '±', '%', '/'], ['7', '8', '9', '*'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '.', '=']];
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          <Text style={styles.result}>{this.state.result}</Text>
        </View>
        <View style={styles.calculationContainer}>
          <Text style={styles.calculation}>{this.state.calculation}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          {buttons.map((row, index) => {
            return <View key={index} style={styles.row}>
              {row.map((button) => {
                return <TouchableOpacity key={button} style={styles.button} onPress={() => this.handleInput(button)}>
                  <Text style={styles.buttonText}>{button}</Text>
                </TouchableOpacity>
              })}
            </View>
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  calculationContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  buttonsContainer: {
    flex: 7,
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 30,
  },
  result: {
    fontSize: 50,
    color: '#000',
  },
  calculation: {
    fontSize: 30,
    color: '#888',
  },
});