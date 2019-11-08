import AppConstants from '../../app/app.constants';

export function getPosts(){
  return {
    type: AppConstants.ACTIONS.FETCH_POSTS,
  }
}

// export function getPostsById(id){
//   return {
//     type: AppConstants.ACTIONS.FETCH_POSTS,
//     payload: {
//       postId: id
//     }
//   }
// }
