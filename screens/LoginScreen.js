import React from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class LoginScreen extends React.Component {
  state = {
    inputValue: "You can change me!"
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };
  
  
  render() {
    return (
      <View>
        <Text>
          Username
        </Text>
      
      </View>
    );
  }
};
