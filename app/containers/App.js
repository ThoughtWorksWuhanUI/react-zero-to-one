import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import thunk from 'redux-thunk';
import moment from 'moment';
import HomePage from './HomePage';
import TopNavContainer from './TopNavContainer'
import SearchResultPage from './SearchResultPage';
import SearchCriteria from '../redux/reducer/SearchCriteria';
import user from '../redux/reducer/user';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers({ searchCriteria, user }));

moment.locale('zh-cn');

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <TopNavContainer />
            <Route exact path="/" component={HomePage} />
            <Route path="/search" component={SearchResultPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}
export default App;
