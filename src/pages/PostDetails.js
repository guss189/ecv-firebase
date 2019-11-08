import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Text, Body } from 'native-base';

import ApiService from '../services/ApiService';

import Post from '../components/posts/Post';

class PostDetails extends Component {

  state = {
    comments: [],
  }

  getData = async() => {
    const comments = await ApiService.get('comments?postId=' + this.props.post.id);
    this.setState({comments: comments});
  }

  componentDidMount(){
    this.getData();
    // Actions.refresh({
    //   title: this.props.post.title,
    // })
  }

  render(){

    const { post } = this.props;
    const { comments } = this.state;

    return (
      <ScrollView style={styles.container}>
        <Text>{post.body}</Text>
        {comments.map((comment,index) => (
          <Card key={comment.id}>
            <CardItem style={styles.card} footer>
              <Text style={styles.line}>name: {comment.name}</Text>
              <Text style={styles.line}>email: {comment.email}</Text>
              <Text style={styles.line}>body: {comment.body}</Text>
            </CardItem>
          </Card>
        ))}
      </ScrollView>

    );

  }

}

export default PostDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 5,
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems:'flex-start',
  },
  line: {
    textAlign: 'left',
  }
});
