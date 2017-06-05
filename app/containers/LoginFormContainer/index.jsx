import React from 'react';
import { connect } from 'react-redux'
import { Login } from '../../redux/actions'
import LoginForm from '../../components/LoginForm'

const mapDispatchToProps = (dispatch) => ({
  onClick: (user) => {
    dispatch(Login(user))
  }
});
const LoginFormContainer = connect(mapDispatchToProps)(LoginForm);
export default LoginFormContainer;
