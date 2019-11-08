import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Content, Form, Item, Input, Button } from 'native-base';
import { AuthService, usersDB } from '../firebase';
import { Actions } from 'react-native-router-flux';
import AppConstants from '../app/app.constants';
import * as DocumentPicker from 'expo-document-picker';
import { Camera } from 'expo-camera';

class AccueilPage extends Component {

  state = {
    response : null,
  }

  signOut = () => {
    console.log('deco');
  }

  componentDidMount = async () =>{

    try{

      var test = await usersDB.getUserInfo(this.props.userID);
      console.log(test);

      this.setState({
        response: test,
      })

    }
    catch(e){
      console.log('Error get',e);
    }

  }

  selectFile = async() =>{
    const result = await DocumentPicker.getDocumentAsync({});
    console.log(result);
  }

  render(){
    if(this.state.response != null){
      return (
        <View style={styles.container}>
            <Text>{this.state.response.firstName}</Text>
            <Button onPress={this.selectFile}>
              <Text>FICHIER</Text>
            </Button>
        </View>
      );
    }
    else{
      return(
        <View style={styles.container}>
          <Text>eijfejf</Text>
        </View>
      );
    }
  }

}

export default AccueilPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 5,
  },
});
