import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
      borderRadius: 50,
      margin: 5
    },
    buttonText: {
      fontSize: 30,
    },
    result: {
      fontSize: 60,
      color: '#000',
    },
    calculation: {
      fontSize: 40,
      color: '#888',
    },
  });