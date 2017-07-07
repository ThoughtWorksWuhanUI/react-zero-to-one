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
# <span style="color:#61dafb">React</span>解决什么问题？

A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES
[slide]
## 构建随着时间数据不断变化的大规模应用程序
[slide]
## 仅仅表达出应用程序在任时间点应该的样子

当数据变了，React自动处理所有用户界面的更新
[slide]
# Thinking in <span style="color:#61dafb">React</span>

声明式（相对于命令式)

状态机

模板引擎 => 组件化

组合而不是继承

自顶而下的单向数据流
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

```javascript
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
## webpack loader
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
## webpack loader
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
# Promise Chain {:&.flexbox.vleft}
```javascript
function increment(value) { return value + 1; }
function output(value) { console.log(value); }
/**  1 + 1 = 2 **/

var promise = Promise.resolve(1);

promise
  .then(increment)
  .then(output);
```
不管是 then 还是 catch 方法调用，都返回了一个新的promise对象

问题：( 1 + 1 ) * 2 = 4
[slide]

# 问题：( 1 + 1 ) * 2 = 4 {:&.flexbox.vleft}
```javascript
function doubleUp(value) { return value * 2; }
function increment(value) { return value + 1; }
function output(value) { console.log(value); }
/** ( 1 + 1 ) * 2 = 4 **/

var promise = Promise.resolve(1);

promise
  .then(increment)
  .then(doubleUp)
  .then(output);
```

[slide]
# Chaining Request {:&.flexbox.vleft}

https://raw.githubusercontent.com/benweizhu/es6-promise-workshop/master/data/books.json

```json
[
  {
    "id": 1,
    "name": "《重构 改善既有代码的设计》",
    "price": 100,
    "url": "https://raw.githubusercontent.com/benweizhu/es6-promise-workshop/master/data/refactoring.json"
  },
  {
    "id": 2,
    "name": "《JavaScript编程精粹》",
    "price": 100,
    "url": "https://raw.githubusercontent.com/benweizhu/es6-promise-workshop/master/data/javascript-the-good-parts.json"
  }
]

```
[slide]
# 在then中返回一个promise  {:&.flexbox.vleft}

* 如果你返回类似于promise的内容，下一个then()则会等待，并仅在promise产生结果（成功/失败）时调用 {:&.rollIn}
[slide]

# 在then中返回一个promise  {:&.flexbox.vleft}
```javascript
function resolveAfterTime(num, time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(num);
    }, time)
  });
}

resolveAfterTime(10, 1000).then(function (value) {
  console.log(value)
  return resolveAfterTime(value + 10, 5000);
}).then(function (value) {
  console.log(value)
});
```
[slide]

checkout to step5 to see the result
[slide]
## Promise.all

接收一个promise对象的数组作为参数，当这个数组里的所有promise对象全部变为resolve或reject状态的时候，它才会去调用.then方法。

[slide]

## 谢谢
---

参考资料：

[JavaScript Promise迷你书](http://liubin.org/promises-book/)

[Google Promise](https://developers.google.com/web/fundamentals/getting-started/primers/promises?hl=zh-cn)

[What the hell is event loop anyway](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
