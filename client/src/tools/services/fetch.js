export function sendData(url, data) {
  return function(dispatch) {
    const model = url
      .substring(0, url.length - 1)
      .substring(url.substring(0, url.length - 1).lastIndexOf('/') + 1);
    dispatch(setLoading());
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response =>
        response.json().then(json => ({
          status: response.status,
          json,
        })),
      )
      .then(
        ({ status, json }) => {
          dispatch(resetLoading());
          if (status >= 400) dispatch(setErrorModal(json));
          else {
            dispatch(receiveResponse(json));
            dispatch(addItem(model, JSON.parse(json.data)));
          }
        },
        err => {
          dispatch(resetLoading());
          dispatch(setErrorModal(err));
        },
      );
  };
}

// ejemplo prof redux
export const getProduct = payload => dispatch => {
  fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(res => {
      dispatch(getProductSuccess(res));
    })
    .catch(err => {
      dispatch(getProductError(err));
    });
};

// ejemplo github (Thunks)
import { itemsHasErrored, itemsIsLoading, itemsFetchDataSuccess } from '../actions/userRepos';

// A thunk is a function that returns a function.
// get user repos
function getUserRepos(forUser) {
  return function(dispatch) {
    dispatch(itemsIsLoading(true));
    const url = `https://api.github.com/users/${forUser}/repos`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then(response => response.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(error => dispatch(itemsHasErrored(error)));
  };
}

export default getUserRepos;
