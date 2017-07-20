title: React从0到1
speaker: Benwei
url: https://github.com/ThoughtWorksWuhanUI/react-zero-to-one
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: moon
usemathjax: yes

[slide]
# <div style="color:#61dafb">React从0到1</div>
### React前端工作坊
[slide]
# Why <span style="color:#61dafb">React?</span>
[slide]
# 你会学到的技术栈
React, JSX, ES6, Redux, React-Router, Webpack, Babel...
[slide]
# <span style="color:#61dafb">React</span>是什么？

A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
[slide]

# React isn't an MVC framework.

React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.

https://facebook.github.io/react/blog/2013/06/05/why-react.html
[slide]
## 仅仅表达出应用程序在任时间点应该的样子

当数据变了，React自动处理所有用户界面的更新
[slide]
# Thinking in <span style="color:#61dafb">React</span>

声明式（What, not how)

状态机

模板引擎 => 组件化

组合而不是继承

自顶而下的单向数据流
[slide]
# Part I

React开发环境

React基础知识（上）

[slide]
# 搭建开发环境
[slide]
## nvm and yarn

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

brew install yarn

yarn init # 多一个yarn.lock文件
```

https://www.sitepoint.com/yarn-vs-npm/

[slide]
## webpack and babel
```bash
yarn add webpack --dev
yarn add babel-loader babel-core --dev
```
[slide]
<div style="margin-bottom: 20px">
  <img src="https://webpack.js.org/cd0bb358c45b584743d8ce4991777c42.svg" height="80px" alt="Alt text">
  <span style="display:inline-block;line-height: 80px;vertical-align: top;">Bundle your things<span>
</div>

* bundle scripts/images/styles/assets
* es2015 modules ...

[slide]
## 练习：用Webpack打包编译
```bash
mkdir app
touch ./app/index.js
touch webpack.config.js
```
webpack.config.js
```javascript
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
[slide]
<img src="https://pbs.twimg.com/profile_images/567000326444556290/-1wfGjNw.png" height="150px" alt="Alt text">

### Babel is a JavaScript compiler
[slide]
# 练习 Babel + Webpack
```javascript
module.exports = {
  ...
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
```

https://babeljs.io/repl/

[slide]
## Out of the box, <span style="color:#F5DA55">Babel</span> do nothing.
```javascript
const babel = code => code;
```
## <span style="color:#F5DA55">Babel</span> plugins
```bash
yarn add babel-plugin-check-es2015-constants --dev
yarn add babel-plugin-transform-es2015-arrow-functions --dev
```
## <span style="color:#F5DA55">Babel</span> preset == a bundle of plugins
```bash
yarn add babel-preset-es2015 --dev
yarn add babel-preset-react --dev
yarn add babel-preset-stage-2 --dev
```
[slide]
# Preset
.babelrc
```json
{
  "presets": [
    "es2015",
    "react",
    "stage-2"
  ]
}
```
* Plugins run before Presets.
* Plugin ordering is first to last.
* Preset ordering is reversed (last to first).
[slide]
# 练习：Get ready for webapp
```html
<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>React 0 to 1 Workshop</title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <div id="app"></div>
</body>

</html>
```
[slide]
## webpack plugin
```bash
yarn add html-webpack-plugin --dev
```
webpack.config.js
```
const HtmlWebpackPlugin = require('html-webpack-plugin');
...

module.exports = {
  ...
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]
};
```
index.html
```
var textnode = document.createTextNode("Hello React 0 to 1");
document.body.appendChild(textnode);
```
[slide]
# 练习：第一行React

```html
import React from 'react';
import ReactDOM from 'react-dom';

class FirstComponent extends React.Component {
  render() {
    return <div>Hello, {this.props.message}</div>;
  }
}

ReactDOM.render(<FirstComponent message="My First React App" />,
                                document.getElementById('app'));
```
[slide]
# 使用样式
[slide]
## 直接用JS
```javascript
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

class FirstComponent extends React.Component {
  render() {
    return <div style={ divStyle }>Hello, { this.props.message }</div>;
  }
}
```
[slide]
## 用webpack loader来加载样式
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './FirstComponent.scss';

class FirstComponent extends React.Component {
  render() {
    return <div className={styles.red}>Hello, { this.props.message }</div>;
  }
}
```
[slide]
## 练习：webpack loader
```javascript
module: {
  rules: [
    ...
    {
      test: /\.scss$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options: { modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]' }
      }, {
        loader: "sass-loader"
      }]
    }
  ]
},
```
[slide]
# React生命周期
[slide]
# Mounting
* constructor(props)
```javascript
// 思考一下，真实应用下，会用到state？
constructor(props) {
    super(props);
    this.state = { color: props.initialColor };
}
```
* componentWillMount() //only lifecycle hook server render
* render()
```javascript
render() { return null;}
```
* componentDidMount()
```javascript
componentDidMount() {
    fetch('/users').then(function(users) {
      this.setState({ users: users });
    })
}
```
[slide]
# Updating
* componentWillReceiveProps(nextProps) // 什么时候会用到？
* shouldComponentUpdate(nextProps, nextState) //性能瓶颈
```javascript
By default, will return true.
Returning false does not prevent child components from re-rendering
when their state changes.
```
* componentWillUpdate() // 不要在这里调用this.setState()
* render()
* componentDidUpdate(prevProps, prevState) // 可以调用网络请求，如果有必要
[slide]
# this.setState(updater, [callback])

* 不要直接改state，this.state.comment = 'Hello';
* 延迟(异步的)批处理
```javascript
this.setState({username: 'Ben'})
this.state.username // undefined
```
```javascript
// Wrong
this.setState({
    counter: this.state.counter + this.props.increment,
});
```
```javascript
this.setState((prevState, props) => ({
    counter: prevState.counter + props.increment
}));
```
* state更新是merge操作
[slide]
## State Updates are Merged

```javascript
constructor(props) {
  super(props);
  this.state = {
    posts: [],
    comments: []
  };
}
componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });

  fetchComments().then(response => {
    this.setState({
      comments: response.comments
    });
  });
}

```
[slide]
## 可控和非可控组件
[slide]
## 可控组件
```html
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
[slide]
## 非可控组件
```
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" ref={(input) => this.input = input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```
[slide]
# Debug

```javascript
module.exports = {
  ...
  devtool: 'eval-source-map'
}

```
[slide]
# Part II

React基础知识（下）

Presentational and Container Components

Redux

[slide]
## Component

<span style="color:red">vs</span>

## Functional stateless component

<span style="color:red">vs</span>

## PureComponent
[slide]
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

class Welcome extends React.PureComponent {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
[slide]
# Immutability in React

React can’t assume anything about your state. You can mutate it however you want. That’s why setting state always re-renders the component - even if it’s not necessary at all.

```javascript
shouldComponentUpdate(nextProps, nextState) {

}
```
[slide]
## What does Immutability mean?
```javascript
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}
```

```javascript
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}
```
[slide]
# Functional stateless component vs Component {:&.flexbox.vleft}

Using stateless functional components is an <span style="color:red;">"architectural"</span> choice and <span style="color:grey">doesn't have any performance benefits</span> out of the box (yet).
https://github.com/benweizhu/react-redux-you-should-know
[slide]
# Component vs PureComponent {:&.flexbox.vleft}

Exactly like React.Component but implements shouldComponentUpdate() with a <span style="color:red">shallow</span> prop and state comparison.
https://github.com/benweizhu/react-redux-you-should-know
[slide]
### Functional vs Component vs PureComponent
![compare](https://cdn-images-1.medium.com/max/1600/1*w5AgUaaW1e_w-s6-oDxapg.png)
[slide]
## <span style="color:red">Keys</span> in List

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a 	__stable identity__.
[slide]
## <span style="color:red">No Keys</span> in List
```html
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```
```html
<ul>
  <li>first</li>
  <li>second</li>
</ul>

<ul>
  <li>third</li>
  <li>first</li>
  <li>second</li>
</ul>
```
[slide]
## <span style="color:red">Keys</span> in List

```html
<ul>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>

<ul>
  <li key="2014">Connecticut</li>
  <li key="2015">Duke</li>
  <li key="2016">Villanova</li>
</ul>
```
https://github.com/benweizhu/react-redux-you-should-know/tree/master/unique-keys-for-children
[slide]
## <span style="color:red">Keys</span> in List
![keys](https://cloud.githubusercontent.com/assets/5471228/26673917/24c2b27c-46f1-11e7-936e-440d5da66dfb.png)
https://github.com/benweizhu/react-redux-you-should-know/tree/master/unique-keys-for-children
[slide]
Keys used within arrays should be unique __among their siblings.__ However they <span style="color:red">don't need to be globally unique</span>.
[slide]
# Keys

* Model/Data with __unique ID__ is best choice.

* When that's not the case, you can __add a new ID property__ to your model or __hash some parts__ of the content to generate a key.

* If you don't specify any key, React will warn you and __fall back to using the array index as a key__ – which is <span style="color:red;">not the correct choice</span> if you ever reorder elements in the list or add/remove items anywhere but the bottom of the list.
[slide]
## Autobinding

```javascript
constructor(props) {
  super(props);
  this.state = {message: 'Hello!'};
  // This line is important!
  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  alert(this.state.message);
}
```

```javascript
handleClick = () => {
  alert(this.state.message);
}
```
[slide]
<div style="margin-bottom: 20px">
  <img src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo-title-light.png" height="200px" alt="Alt text">
</div>
[slide]
## __Presentational__ and <span style="color:orange;">Container</span> Components
[slide]
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

Team @reactjs. Created Redux, React Hot Loader...
[slide]
## Presentational

* Are concerned with __how things look__.
* Often allow containment via this.props.children.
* Have no dependencies on the rest of the app, such as Flux actions or stores.
* Don’t specify how the data is loaded or mutated.
* Receive data and callbacks exclusively via props.
* Rarely have their own state (when they do, it’s UI state rather than data)...

[slide]
## Container

* Are concerned with <span style="color:orange;">how things work</span>.
* Provide the data and behavior to presentational or other container components.
* Call Flux actions and provide these as callbacks to the presentational components.
* Are often stateful, as they tend to serve as data sources.
* Are usually generated using higher order components such as connect() from React Redux...
[slide]
## 它们之间的关系是什么样的？
[slide]
## Can I put a Container inside a Presentional?

<img width="500" alt="2017-07-12 5 59 32" src="https://user-images.githubusercontent.com/5471228/28112541-f33c37a4-672b-11e7-89da-6d3c459c5431.png">

[slide]
* __Presentational__ May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.
* <span style="color:orange;">Container</span> May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
[slide]
# store
# reducer
# action
[slide]
# React-Redux patten

![redux-article-3-02](https://user-images.githubusercontent.com/5471228/28116143-53934f94-673a-11e7-88ed-4026f2f27f49.png)
[slide]

# Reducer

![redux-article-3-04](https://user-images.githubusercontent.com/5471228/28116286-14fbb95a-673b-11e7-97b5-68098ee3dd01.png)

## 为什么叫reducer?

[slide]
Array.prototype.reduce()
```javascript
let sum = [0, 1, 2, 3].reduce(function(acc, val) {
  return acc + val;
}, 0);
```
[slide]
```javascript
(previousState, action) => newState
```

Reducer是一个__纯函数__，在相同的参数的情况下，应该只是计算下一个state并返回它，没有任何副作用，没有任何API调用，没有任何参数操作，只是纯计算逻辑。
[slide]
## action
只关心做什么
```javascript
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
```
[slide]
## store
掌握应用的状态，也是reducer和action的枢纽
```javascript
import { createStore } from 'redux'
import todoApp from './reducers'
let store = createStore(todoApp)

function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

store.dispatch(addTodo('Read the docs'))
store.dispatch(addTodo('Read about the middleware'))
```
[slide]
# react-redux
[slide]
## Connect

```javascript
import { connect } from 'react-redux'

class VisibleTodoList extends React.Component {
  ...
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
```
[slide]
# 高阶组件
[slide]
# 函数式编程 - 高阶函数 {:&.flexbox.vleft}

Take a function as one of its arguments

* Map
* Reduce

Returns a function
```javascript
function add(x) {
  return function(y) {
    return x + y
  }
}
var add2 = add(2)
```
[slide]
# 高阶组件 {:&.flexbox.vleft}
![image](https://user-images.githubusercontent.com/5471228/28306817-6696f954-6bd3-11e7-8889-a5d8a6e2fe97.png)
[slide]
## Immutability in Redux
[slide]
## Reducer return a copy of state
```javascript
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    default:
      return state
  }
}
```
```javascript
function todoApp(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return { ...state, visibilityFilter: action.filter }
    default:
      return state
  }
}
```
[slide]

# React-Redux shallow equality check {:&.flexbox.vleft}

It assumes that the __wrapped component is pure__.

It will perform a __shallow equality check__ on its stored reference to the __root state object__, and the current root state object passed to it from the store.

If the check passes, the root state object has not been updated, and so there is __no need to re-render the component, or even call mapStateToProps__.
[slide]
# What about combineReducers? {:&.flexbox.vleft}
```javascript
combineReducers({ todos: myTodosReducer, counter: myCounterReducer })
```

combineReducers performs a shallow equality check on the current __state slice__ and the state slice returned from the reducer. If the reducer returns a new object, the shallow equality check will fail, and combineReducers will set a hasChanged flag to true.

[slide]
## Sometime it still doesn't rendering？
[slide]
```javascript
function updateNestedState(state, action) {
    let nestedState = state.nestedState;
    // ERROR: this directly modifies the existing object reference - don't do this!
    nestedState.nestedField = action.data;

    return {
        ...state,
        nestedState
    };
}
```

```javascript
function updateNestedState(state, action) {
    // Problem: this only does a shallow copy!
    let newState = {...state};

    // ERROR: nestedState is still the same object!
    newState.nestedState.nestedField = action.data;

    return newState;
}
```
[slide]
# shallow check in mapStateToProps {:&.flexbox.vleft}

If the root state equality __check fails__, connect will call mapStateToProps to see if the props for the wrapped component have been updated.

It does this by performing __a shallow equality check__ on __each value within the object individually__, and will only trigger a re-render if one of those checks fails.

```javascript
function mapStateToProps(state) {
  return {
    todos: state.todos, // prop value
    visibleTodos: getVisibleTodos(state) // selector
  }
}

export default connect(mapStateToProps)(TodoApp)
```

[slide]
# shallow check in connect {:&.flexbox.vleft}

```javascript
function mapStateToProps(state) {
  return {
    todos: state.todos, // prop value
    visibleTodos: getVisibleTodos(state) // selector
  }
}

export default connect(mapStateToProps)(TodoApp)
```
connect() method source code
```javascript

return function wrapWithConnect(WrappedComponent) {
    class Connect extends Component {
      ...
      shouldComponentUpdate(nextProps, nextState) {
        return !shallowEqual(this.state.props, nextState.props);
      }
    }
};
```
[slide]
## Alwasy re-rendering
```javascript
function mapStateToProps(state) {
  return {
    todos: state.todos, // prop value
    visibleTodos: getVisibleTodos(state) // selector
  }
}
```
```javascript
const mapStateToProps = state => {
  return {
    objects: state.objectIds.map(id => state.objects[id])
  }
}
```
[slide]
## [Reselect](https://github.com/reactjs/reselect)

* extract mapSateToProps logic
* compute derived data
* efficient
-----

### Tuturiol: https://www.youtube.com/watch?v=XCQ0ZSr-a2o
[slide]
## Do I have to put all my state into Redux?
[slide]
# Ask yourself these questions: {:&.flexbox.vleft}
* Do other parts of the application care about this data?
* Do you need to be able to create further derived data based on this original data?
* Is the same data being used to drive multiple components?
* Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
* Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
[slide]
## How to choose between Redux's store and React's state?
![image](https://user-images.githubusercontent.com/5471228/28198439-cb23b150-6890-11e7-8bf3-a666b821785f.png)

[slide]
![Should I keep something in React component state?](https://pbs.twimg.com/media/CmeBsGzW8AQp_av.jpg)

<span style="font-size:18px">Dan Abramov @Co-authored Redux, Create React App, React Hot Loader</span>
[slide]
## One Basic Rule: Keep it simple
[slide]
## How to structure redux code?
[slide]
## How to structure redux code?

* Rails-style: separate folders for __“actions”__, “constants”, __“reducers”__, __“containers”__, and __“components”__
* Domain-style: separate folders per feature or domain, possibly with sub-folders per file type
* __“Ducks”__: similar to domain style, but explicitly tying together actions and reducers, often by defining them in the same file
[slide]
### Ducks

```javascript
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function getWidget () {
  return dispatch => get('/widget').then(widget => dispatch(setWidget(widget)))
}
```
[slide]
 ## 第三部分 React在产品环境下的性能优化
[slide]

## 只有10%~20%的最终用户响应时间花在了下载HTML文档上，其余的80%~90%时间花在了__下载页面中的所有组件__上。

性能黄金法则，Steve Souders
[slide]
## 了解项目的模块
[slide]
## webpack chunks

```sh
webpack --display-chunks
```

<div style="text-align:left;">
<div>
Webpack has a feature to split your codebase into “chunks” which are loaded on demand.
</div>
</br>
<div>
Some other bundlers call them “layers”, “rollups”, or “fragments”.
</div>
</div>
[slide]
## webpack chunks
<img src="http://benweizhu.github.io/images/react-production/webpack-output.png" width="700" alt="react ouput">
[slide]
其他分析模块的工具：

[webpack-bundle-size-analyzer](https://github.com/robertknight/webpack-bundle-size-analyzer)

[webpack-bundle-analyzer](https://github.com/th0r/webpack-bundle-analyzer)

<img src="http://benweizhu.github.io/images/react-production/webpack-bundle-analyzer.gif" width="500" alt="webpack-bundle-analyzer.gif">

[slide]

# Code Splitting

- Entries
- CommonChunkPlugin
- Dynamic Imports

[slide]

## Entries
```javascript
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
[slide]
## CommonChunkPlugin

```javascript
var webpack = require('webpack');
var path = require('path');

module.exports = function(env) {
    return {
        entry: {
            main: './index.js',
            vendor: 'react', 'react-dom', 'react-redux', 'babel-polyfill']
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor' // Specify the common bundle's name.
            })
        ]
    }
}

```
[slide]
## React-Router按需分离Chunk

ES2015 Loader spec中定义了一个import()方法可以在运行时动态加载ES2015的模块

```javascript
function determineDate() {
  import('moment').then(function(moment) {
    console.log(moment().format());
  }).catch(function(err) {
    console.log('Failed to load moment', err);
  });
}
determineDate();
```
Webpack会将import()方法看做一个“代码分离点”
[slide]

```
function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}

function loadRoute(cb) {
  return module => cb(null, module.default);
}

<Router history={history} queryKey="false">
  <Route path="/user" name="UserPage" getComponent={(location, cb) => {
    System.import('./components/UserPage').then(loadRoute(cb, false)).catch(errorLoading)}}
  />
  <Route path="/data" name="DataPage" getComponent={(location, cb) => {
    System.import('./components/DataPage').then(loadRoute(cb, false)).catch(errorLoading)}}
  />
  <Route path="/about" name="AboutPage" getComponent={(location, cb) => {
    System.import('./components/AboutPage').then(loadRoute(cb, false)).catch(errorLoading)}}
  />
</Router>
```
Code splitting with React Router v4
https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
