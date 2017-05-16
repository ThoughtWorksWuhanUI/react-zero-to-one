import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello, {this.props.message}</div>;
  }
}

ReactDOM.render(<HelloMessage message="My First React App" />, document.body);
