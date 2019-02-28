import { userService } from '../_services/user.service'

export const signIn = (email, password) => {
  return dispatch => {
    dispatch(request({ email, password }));

    userService.signIn(email, password)
      .then(
        user => {
          console.log(user)
          dispatch(success(user));
          // history.push('/');
        },
        error => {
          dispatch(failure(error));
          // dispatch(alertActions.error(error));
        }
      );
  };

  function request(user) { return { type: 'SIGN_IN', user } }
  function success(user) { return { type: 'SIGN_IN_SUCCESS', user } }
  function failure(error) { return { type: 'SIGN_IN_ERROR', error } }
}

export const signOut = () => {
  userService.signOut();
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