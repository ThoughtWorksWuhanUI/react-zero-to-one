import React from 'react';
import { connect } from 'react-redux'
import TopNav from '../../components/TopNav';
import {Login, Logout, Reset} from '../../redux/actions';

const mapStateToProps = (state) => ({
    user: state
});

const mapDispatchToProps = (dispatch) => ({
  handleLogin: (user) => {
    dispatch(Login(user))
  },
  handleLogout: () => {
    dispatch(Logout())
  },
  resetLoginForm: () => {
    dispatch(Reset())
  }
});
const TopNavContainer = connect(mapStateToProps, mapDispatchToProps)(TopNav);
export default TopNavContainer;
