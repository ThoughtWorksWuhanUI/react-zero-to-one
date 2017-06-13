import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import moment from 'moment';
import thunk from 'redux-thunk';
import HomePage from './HomePage';
import searchCriteria from '../redux/reducer/SearchCriteria';
import user from '../redux/reducer/user';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers({searchCriteria,user}));


class App extends React.Component {
  render() {
    moment.locale('zh-cn');
    return (
      <Provider store={ store }>
        <HomePage/>
      </Provider>
    )
  }
}
export default App;
