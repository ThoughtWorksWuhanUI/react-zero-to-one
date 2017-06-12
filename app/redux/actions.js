import axios from 'axios';
const getUsersListUrl = 'https://raw.githubusercontent.com/ThoughtWorksWuhanUI/react-zero-to-one/master/mock_data/users.json';

const LoginSuccess = user => ({
  type: 'LOGIN',
  payload: {
    email: user.email,
    name: user.name,
    isLoggedIn: true,
    errorMessage: null
  }
});

const LoginFailed = () => ({
  type: 'LOGIN',
  payload: {
    email: null,
    name: null,
    isLoggedIn: false,
    errorMessage: 'User does not exit!'
  }
});

export const Reset = () => ({
  type: 'RESET LOGIN FORM'
});

export const Logout = () => ({
  type: 'LOGOUT'
});

export const Login = (user) => {
  return (dispatch) => {
    axios.get(getUsersListUrl).then((response) => {
      let loginUser = response.data.find((u) => {
        return u.email === user.email && u.password === user.password;
      });
      if(loginUser) {
        dispatch(LoginSuccess(loginUser))
      } else {
        dispatch(LoginFailed())
      }
    })
  }
}
