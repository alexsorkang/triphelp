import { userService } from '../_services/user.service'
import { history } from '../_helpers/history';

export const signIn = (email, password) => {
  return dispatch => {
    dispatch(request({ email, password }));

    userService.signIn(email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
        }
      );
  };

  function request(user) { return { type: 'SIGN_IN', user } }
  function success(user) { return { type: 'SIGN_IN_SUCCESS', user } }
  function failure(error) { return { type: 'SIGN_IN_ERROR', error } }
}

export const signUp = (email, password) => {
  return dispatch => {
    dispatch(request({ email, password }));

    userService.signUp(email, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error));
          // dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: 'SIGN_UP', user } }
  function success(user) { return { type: 'SIGN_UP_SUCCESS', user } }
  function failure(error) { return { type: 'SIGN_UP_ERROR', error } }
}

export const signOut = () => {
  userService.signOut();
  history.push('/login');
  return { type: 'SIGN_OUT' };
}

export const getAll = () => {
  return dispatch => {
    dispatch(request());

    userService.getAll()
      .then(
        users => dispatch(success(users)),
        error => { 
          dispatch(failure(error));
          // dispatch(alertActions.error(error))
        }
      );
  };

  function request() { return { type: 'GETALL' } }
  function success(users) { return { type: 'GETALL_SUCCESS', users } }
  function failure(error) { return { type: 'GETALL_ERROR', error } }
}