import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Button } from 'native-base';
import Input from '../components/forms/Input';
import ApiService from '../services/ApiService';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10
  }
});

class PostAdd extends Component {
  state = {
    form: {
      title: '',
      body: '',
    }
  };

  handleInputChange = (field, value) => {
    const { form } = this.state;
    this.setState({
      form: {
        ...form,
        [field]: value
      }
    })
  };

  submit = async () => {
    const { form } = this.state;
    form.userId = 1;

    const response = await ApiService.post('posts', form);

    Actions.pop();
    // Action.popTo(); -> Pour pop jusqu'à la page spécifiée
    // Actions.home({type: ActionConst.RESET}); -> pour reinit le stack de nav et aller à la page définie
  }

  render(){
    return(
      <View style={styles.container}>
        <Input
          label="Titre"
          onChange={(value) => this.handleInputChange("title", value)}
        />
        <Input
          label="Texte"
          onChange={(value) => this.handleInputChange("body", value)}
          textarea
        />
        <Button success onPress={this.submit} style={{width: 150, justifyContent: 'center', marginTop: 50, color: 'white', fontWeight: 'bold'}}>
          <Text style={{color: 'white', fontWeight: 'bold', textTransform: 'uppercase'}}>Ajouter</Text>
        </Button>
      </View>
    );
  }
}

export default PostAdd;
