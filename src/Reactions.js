import React from 'react';
import { connect } from "react-redux";
import { decrement, increment } from './features/followers/followersSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons'

const UP = "up";
const DOWN = "down";

class Reactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.setOrder(),
      colors: this.setColors()
    }

    this.reactionHandler = this.reactionHandler.bind(this);
  }

  setOrder() {
    return Math.random() < 0.5 ? [UP, DOWN] : [DOWN, UP];
  }

  setColors() {
    return Math.random() < 0.5
      ? ["text-green-500", "text-red-500"]
      : ["text-red-500", "text-green-500"];
  }

  reactionHandler(e) {
    // If the player clicks the icon instead of the larger button, the id isn’t
    // right; ensure getting the button’s id
    const elementId = e.target.closest(".reaction-button").id.split("_");
    const postId = elementId[0];
    const thumb = elementId[1];

    if (
      (thumb === UP && this.props.good) ||
      (thumb === DOWN && !this.props.good)
    ) {
      console.log("CORRECT!");
      this.props.increment();
    } else {
      console.log("WRONG!!");
      this.props.decrement();
    }

    this.props.removePost(postId);
  }

  renderButtons() {
    return this.state.order.map((thumb, i) => {
      const icon = thumb === UP ? faThumbsUp : faThumbsDown;

      return (
        <button key={thumb} id={`${this.props.postId}_${thumb}`} className={`reaction-button p-4 ${this.state.colors[i]}`} onClick={this.reactionHandler}>
          <FontAwesomeIcon icon={icon} />
        </button>
      )
    })
  }

  render() {
    return (
      <div className="border-t-2 grid grid-cols-2 divide-x-2 divide-gray-200">
        {this.renderButtons()}
      </div>
    );
  }
}

export default connect(
  null,
  { decrement, increment }
)(Reactions);
