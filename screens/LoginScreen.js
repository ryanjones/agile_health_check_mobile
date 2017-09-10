import React from 'react';
import {
  View,
  StyleSheet,
  Alert
} from 'react-native';

import { FormLabel, FormInput, Button } from 'react-native-elements'


export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};

    this.state = {
      email: '',
      password: '',
    }
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  submitForm = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
    console.log('form submitted!!!!');
  };

  render() {
    return (
      <View style={styles.outerContainer}>
        <FormLabel
          style={styles.formLabel}>
          Email
        </FormLabel>


        <FormInput
          placeholder="Please enter your email..."
          blurOnSubmit={ false }
          returnKeyType={ "next" }
          style={styles.formInput}
          ref={ input => {
            this.inputs['one'] = input;
          }}
          onSubmitEditing={() => {
            this.focusNextField('two');
          }}
          onChangeText={email => this.setState({email})}
        />
        <FormLabel
          style={styles.formLabel}>
          Password
        </FormLabel>
        <FormInput
          placeholder="Please enter your password..."
          blurOnSubmit={ false }
          returnKeyType={ "go" }
          style={styles.formInput}
          ref={ input => {
            this.inputs['two'] = input;
          }}
          onChangeText={password => this.setState({password})}
          onSubmitEditing={() => { this.submitForm() }}
        />
        
        <Button
          title="Login"
          icon={{name: 'done'}}
          iconRight
          raised
          style={styles.formButton}
          onPress={this.submitForm}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  formInput: {
    paddingBottom: 5
  },
  formLabel: {
    paddingTop: 20,
    paddingBottom: 10
  },
  formButton: {
    paddingTop: 40
  }
}
  
);


