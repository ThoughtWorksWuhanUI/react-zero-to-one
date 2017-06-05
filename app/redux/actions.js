export const Login = user => ({
  type: 'LOGIN',
  payload: user
})

export const Logout = () => ({
  type: 'LOGOUT'
});
