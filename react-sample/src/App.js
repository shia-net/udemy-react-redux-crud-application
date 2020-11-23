import React, { Component } from 'react';

class App extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

// Javascriptで書いた場合
// class App extends Component {
//   render() {
//     return React.createElement(
//       "div",
//       null,
//       "Hello, world!!",
//     );
//   }
// }

export default App;
