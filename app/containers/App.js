import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomePage from './HomePage';
import user from '../redux/reducer/user'

let store = createStore(user);

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
