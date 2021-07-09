import React from 'react';
import Post from './Post';
var faker = require('faker');

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }

    this.removePost = this.removePost.bind(this);
  }

  // Add a new post every 3 seconds
  componentDidMount() {
    this.addPost(this.createPost());
    setInterval(() => {
      this.addPost(this.createPost());
    }, 3000);
  }

  createPost() {
    const good = Math.random() < 0.5;
    return {
      id: faker.datatype.uuid(),
      good: good
    }
  }

  addPost(post) {
    const posts = [...this.state.posts, post]
    this.setState({ posts });
  }

  removePost(postId) {
    const posts = this.state.posts.filter((post) => {
      return post.id !== postId;
    })

    this.setState({ posts });
  }

  renderPosts() {
    return this.state.posts.map((post) => {
      return <Post
        key={post.id}
        id={post.id}
        good={post.good}
        removePost={this.removePost}
      />;
    })
  }

  render() {
    return (
      <div className="mb-20">{this.renderPosts()}</div>
    );
  }
}

export default FeedContainer;
