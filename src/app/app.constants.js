export default {
  baseURL : 'https://jsonplaceholder.typicode.com',
  postPerPage: 10,

  ROUTES: {
    signup: 'signup',
    login: 'login',
    accueil: 'accueil',
    home: 'home',
  },

  ACTIONS:{
    FETCH_POSTS: 'FETCH_POSTS',
    SET_POSTS_LIST: 'SET_POSTS_LIST',
  },

}
