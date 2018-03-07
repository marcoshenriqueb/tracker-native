import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, ImageBackground, StyleSheet, KeyboardAvoidingView, TextInput, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  textInput: {
    minWidth: 250,
    padding: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 3,
    color: 'black',
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'white',
    minWidth: 250,
  },
});

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
        >
          <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <KeyboardAvoidingView
              behavior="padding"
              style={styles.content}
              keyboardVerticalOffset={150}
            >
              <Text style={styles.text}>Tracker</Text>
              <TextInput
                placeholder="Login"
                style={styles.textInput}
                keyboardType="numeric"
                value={this.state.number}
                onChangeText={(tableNumber) => { this.setState({ number: tableNumber }); }}
              />
              <TextInput
                placeholder="Senha"
                style={styles.textInput}
                keyboardType="numeric"
                value={this.state.number}
                onChangeText={(tableNumber) => { this.setState({ number: tableNumber }); }}
              />
              <Button
                title="Entrar"
                onPress={() => { this.props.navigation.navigate('Dashboard'); }}
                style={styles.button}
                color="black"
              />
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScreen;
