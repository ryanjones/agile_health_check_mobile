import React from 'react';
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  Alert
} from 'react-native';


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
        <TextInput
          placeholder="email"
          blurOnSubmit={ false }
          returnKeyType={ "next" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['one'] = input;
          }}
          onSubmitEditing={() => {
            this.focusNextField('two');
          }}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          placeholder="password"
          blurOnSubmit={ false }
          returnKeyType={ "go" }
          style={styles.textInput}
          ref={ input => {
            this.inputs['two'] = input;
          }}
          onChangeText={password => this.setState({password})}
          onSubmitEditing={() => { this.submitForm() }}
        />
        <Button
          title="Login"
          onPress={this.submitForm}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
    flexDirection: 'column',
  },
  textInput: {
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    height: 44,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
}
  
);


