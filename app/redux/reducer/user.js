const initialState = {
  isLoggedIn: false,
  email: null,
  name: null,
};

const User = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isLoggedIn: true,
        ...action.payload
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
}

export default User;


