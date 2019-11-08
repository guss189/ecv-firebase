import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Card, CardItem, Text, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Post = ({post}) => {

  const goToPostDetails = (event) => {
    Actions['postDetail']({
      post,
      title: post.title,
    });
    // Actions.postDetail({
    //   post,
    // });
  }

  return(
    <View>
      {post && (
        <TouchableOpacity onPress={(event) => goToPostDetails(event)}>
          <Card>
            <CardItem header>
              <Text>{post.id} - {post.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{post.body}</Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Footer</Text>
            </CardItem>
          </Card>
        </TouchableOpacity>
      )}
    </View>
  );

}

Post.propTypes = {
  post: PropTypes.object,
}

Post.defaultTypes = {
  post: null,
}

export default Post;
