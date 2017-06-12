const initialState = {
  isLoggedIn: false,
  email: null,
  name: null,
  errorMessage: null
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
       return {
        ...action.payload
       }
    case 'LOGOUT':
      return initialState;
    case 'RESET LOGIN FORM':
      return initialState;
    default:
      return state;
  }
}

export default User;


