import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ApiService from '../services/ApiService';
import { Button } from 'native-base';
import Post from '../components/posts/Post';
import { Actions } from 'react-native-router-flux';
import Fab from '../components/common/Fab';
import AppConstants from '../app/app.constants';

import { connect } from 'react-redux';
import * as PostsActions from '../redux/actions/posts-actions';

class HomePage extends Component {

  state = {
    posts: [],
    page: 0,
    paginatedPost: [],
  }

  getData = async() => {
    const posts = await ApiService.get('posts');
    this.setState({posts: posts}, () => { this.paginateData(); });
  }

  componentDidMount(){
    //this.getData();
    console.log('test git');
    this.props.getPosts();
  }

  goToAddPost(){
    Actions.postAdd();
  }

  paginateData = () =>{
    const { posts,page } = this.state;
    const paginatedPost = posts.slice(page * AppConstants.postPerPage, page * AppConstants.postPerPage + AppConstants.postPerPage);
    this.setState({
      paginatedPost: paginatedPost,
    });
  }

  previousPage = () => {
    const { page } = this.state;
    this.setState({
      page: page - 1,
    }, () => { this.paginateData(); });
  }

  nextPage = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    }, () => { this.paginateData(); });
  }

  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.props.postsList.map((post,index) => (
            <Post key={index}
                  post={post}
            />
          ))}

          <Button onPress={this.previousPage}>
            <Text>Précédent</Text>
          </Button>

          <Button onPress={this.nextPage}>
            <Text>Suivant</Text>
          </Button>


        </ScrollView>
      </View>

    );
  }

}

const mapStateToProps = state => ({
  postsList: state.postsReducer.posts,
});

export default connect(mapStateToProps,{...PostsActions})(
  HomePage
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingHorizontal: 5,
  },
});

//import React, { PureComponent } from 'react';
//class HomePage extends PureComponent {
//PAS DE RENDER SI MODIF STATE PARENT

// const HomePageFunc = () => {
//
//   const [maVariable, setMaVariable] = React.useState(null);
//
//   const func = () => {
//     setMaVariable(newVal);
//   }
//
//   return(
//     <View>
//       <Text>Home Page</Text>
//     </View>
//   );
// }
