import React from 'react';
import { connect } from "react-redux";

import { addPost } from './features/posts/postsSlice';
import { generatePost } from './app/gameFunctions';
import { FeedContainer } from './FeedContainer';
import { Followers } from './Followers';

class App extends React.Component {
  componentDidMount() {
    setInterval(() => {
      this.props.addPost(generatePost());
    }, 3000)
  }

  render() {
    return (
      <div className="max-w-screen-sm m-auto">
        <FeedContainer />
        <Followers />
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(App);
