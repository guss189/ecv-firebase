import { takeLatest, call, put } from 'redux-saga/effects';
import AppConstants from '../../app/app.constants';

async function fetchPosts(){
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());

  return posts;
}

function* fetchPostsSaga(){
  const posts = yield call(fetchPosts);
  yield put({
    type: AppConstants.ACTIONS.SET_POSTS_LIST,
    payload: {
      posts : posts,
    }
  })
}

function* watch() {
  yield takeLatest(AppConstants.ACTIONS.FETCH_POSTS,fetchPostsSaga);
}

export default watch;
