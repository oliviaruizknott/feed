import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import FeedContainer from './FeedContainer';
import { Followers } from './Followers';

class App extends React.Component {
  render() {
    return (
      <div className="max-w-screen-sm m-auto">
        <FeedContainer />
        <Followers />
      </div>
    );
  }

  // render() {
  //   return (
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <Counter />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <span>
  //         <span>Learn </span>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux
  //         </a>
  //         <span>, </span>
  //         <a
  //           className="App-link"
  //           href="https://redux-toolkit.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Redux Toolkit
  //         </a>
  //         ,<span> and </span>
  //         <a
  //           className="App-link"
  //           href="https://react-redux.js.org/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           React Redux
  //         </a>
  //       </span>
  //     </header>
  //   )
  // }
}

export default App;
