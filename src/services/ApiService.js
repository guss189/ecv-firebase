import AppConstants from '../app/app.constants';

const get = (path) => (

  fetch(AppConstants.baseURL + '/' + path)
    .then(response => response.json())
    .catch(error => console.log('Error: ', error))
);

const post = (path, data) => (
  fetch(`${AppConstants.baseURL}/${path}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json"
    }
  })
  .then(response => response.json())
  .catch(error => console.log('Error', error))
);

export default{
  get,
  post
}
