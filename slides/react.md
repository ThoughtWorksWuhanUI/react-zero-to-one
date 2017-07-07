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
# Promise是一个JavaScript对象
[slide]
# ES6 Promise语法 - new Promise
```javascript
var promise = new Promise(function (resolve, reject) {
  // 业务代码
});
```
[slide]
```javascript
var promise = new Promise(function (resolve, reject) {
  // 业务代码
});
```
### Promise中业务代码的执行有两个结果：

<div style="margin-top: 10px">
  <span style="color: green">成功（resolve）</span>或者 <span style="color: red">失败（reject）</span>
</div>
[slide]
# <span style="color: green">成功（resolve）</span>

```javascript
var promise = new Promise(function (resolve) {
  resolve(42); // pass 42 to then cb
});
promise.then(function (value) {
  console.log(value);
});
```
[slide]
# <span style="color: red">失败（reject）</span>

```javascript
var promise = new Promise(function (resolve, reject) {
  reject(new Error('error')); // pass Error obj to catch cb
});
promise.catch(function (error) {
  console.log(error);
});
```
[slide]

# 练习

创建一个Promise，并在业务代码中调用success

```javascript
function success(condition) {
  return condition === 'promise';
}
```
Checkout to basic branch
[slide]
Checkout to step1 branch
```javascript
const condition = 'promise';

function success(condition) {
  return condition === 'promise';
}

var promise = new Promise(function (resolve, reject) {
  if (success(condition)) {
    resolve('done');
  } else {
    reject('been reject');
  }
});

promise.then(function (value) {
  console.log(value);
}).catch(function (errorMessage) {
  console.log(errorMessage)
});

```

[slide]
# Promise是异步操作 {:&.flexbox.vleft}

```javascript
var promise = new Promise(function (resolve) {
  console.log("inner promise");
  resolve('resolve promise');
});

promise.then(function (value) {
  console.log(value);
});

console.log("outer promise");

```
哪部分是异步操作？
[Have a look at the event Loop](http://latentflip.com/loupe/?code=dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgewogIGNvbnNvbGUubG9nKCJpbm5lciBwcm9taXNlIik7CiAgcmVzb2x2ZSgncmVzb2x2ZSBwcm9taXNlJyk7Cn0pOwoKcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkgewogIGNvbnNvbGUubG9nKHZhbHVlKTsKfSk7Cgpjb25zb2xlLmxvZygib3V0ZXIgcHJvbWlzZSIpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D "Title")

Checkout to step1-1 branch
[slide]

# Promise的网络请求 {:&.flexbox.vleft}

```javascript
function fetchData(URL) {
  ...
}

var promise = fetchData('https://raw.githubusercontent.com/benweizhu/es6-promi
se-workshop/master/data/books.json');

promise.then(function (responseText) {
  document.getElementById('json').innerHTML = responseText;
  console.log(JSON.parse(responseText))
}).catch(function (error) {
  console.log(error)
})
```
完成中间省略的部分
[slide]
# XHR {:&.flexbox.vleft}
```javascript
var req = new XMLHttpRequest();
req.open('GET', URL, true);
req.onload = function () {
  if (req.status === 200) {
    console.log(req.responseText);
  } else {
    console.log(req.statusText);
  }
};
req.onerror = function () {
  console.log(req.statusText);
};
req.send();
```
[slide]
checkout to step3 to see the result
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
