import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
// import MathJS from 'mathjs';
import { styles } from './components/Styles';

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
        result = eval(this.state.calculation);
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
                return (
                  <TouchableOpacity key={button} style={styles.button} onPress={() => this.handleInput(button)}>
                    <Text style={styles.buttonText}>{button}</Text>
                  </TouchableOpacity>
                  )
              })}
            </View>
          })}
        </View>
      </View>
    );
  }
}