export function authHeader() {
  // return authorization header with jwt token
  console.log(localStorage)
  let user = JSON.parse(localStorage.getItem('user'));
  if (user.auth) {
      return user.auth
  } else {
      return {}
  }
}