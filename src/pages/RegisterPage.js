import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AppConstants from '../app/app.constants';
import { Content, Form, Item, Input, Button } from 'native-base';
import { AuthService, usersDB } from '../firebase';
import { Actions } from 'react-native-router-flux';

class RegisterPage extends Component {

  state = {
    email:'',
    password:'',
    firstName: '',
    lastName: '',
  }

  handleInputChange = (field,value) => {
    this.setState({
      [field]: value,
    });
  }

  submitForm = async () => {
    const { email, password, firstName, lastName } = this.state;
    try{
      var response = await AuthService.createUser(email,password);

      usersDB.addUserInfo(response.user.uid,{
        firstName,lastName
      });



      Actions.pop();
    }
    catch(e){
      console.log('Error register',e);
    }
  }

  render(){
    const { email, password, firstName, lastName } = this.state;
    return (
      <View style={styles.container}>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                value={email}
                onChangeText={text => this.handleInputChange('email',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Mot de passe"
                value={password}
                onChangeText={text => this.handleInputChange('password',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="firstName"
                value={firstName}
                onChangeText={text => this.handleInputChange('firstName',text)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="lastName"
                value={lastName}
                onChangeText={text => this.handleInputChange('lastName',text)}
              />
            </Item>

            <Button onPress={this.submitForm}>
              <Text>Créer un compte</Text>
            </Button>
          </Form>

        </Content>
      </View>
    );
  }

}

export default RegisterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 5,
  },
});
