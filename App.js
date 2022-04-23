import 'react-native-gesture-handler';
import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';

const Calculator = require('./logic');
console.disableYellowBox = true;
const Stack = createStackNavigator();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: '',
      result: 0,
      history: [],
    };

    this.calculator = new Calculator();
  }

  handleClick = (keyLog, math) => {
    this.calculator.keyClick(keyLog, math);
    this.setState({
      displayValue: this.calculator.mainDisplay(),
      result: this.calculator.calculatedResult(),
    });
  };

  render() {
    const {displayValue, result} = this.state;
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Calculator">
          <Stack.Screen name="Advanced Calculator">
            {props => (
              <MainScreen
                {...props}
                result={result}
                log={displayValue}
                keyClick={this.handleClick}
              />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
