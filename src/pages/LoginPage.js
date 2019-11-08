import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Content, Form, Item, Input, Button } from 'native-base';
import { AuthService } from '../firebase';
import { Actions, ActionConst } from 'react-native-router-flux';

import AppConstants from '../app/app.constants';

class LoginPage extends Component {

  state = {
    email:'',
    password:'',
  }

  handleInputChange = (field,value) => {
    this.setState({
      [field]: value,
    });
  }

  goRegsiter = () => {
    Actions[AppConstants.ROUTES.signup]({
      title: 'TEST',
    });
  }

  submitForm = async() => {
    const { email, password } = this.state;
    try{
      var response = await AuthService.login(email,password);

      Actions[AppConstants.ROUTES.accueil]({
        title: 'TEST',
        type: ActionConst.RESET,
        userID: response.user.uid
      });
    }
    catch(e){
      console.log('Error login',e);
    }
  }

  render(){
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={(text) => this.handleInputChange('email',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Mot de passe"
                value={password}
                onChangeText={(text) => this.handleInputChange('password',text)}
              />
            </Item>

            <Button onPress={this.submitForm}>
              <Text>Se connecter</Text>
            </Button>

            <Button onPress={this.goRegsiter}>
              <Text>Créer un compte</Text>
            </Button>
          </Form>

        </Content>
      </View>
    );
  }

}

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 5,
  },
});
