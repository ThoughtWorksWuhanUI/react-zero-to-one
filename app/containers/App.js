import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import HomePage from './HomePage';
import user from '../redux/reducer/user'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(user);


class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <HomePage/>
      </Provider>
    )
  }
}
export default App;
