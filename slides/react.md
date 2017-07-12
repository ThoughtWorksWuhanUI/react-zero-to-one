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
## <span style="color:red">Keys</span> in List
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
## immutability - Tracking Changes

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

https://facebook.github.io/react/tutorial/tutorial.html#why-immutability-is-important
