import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';

import { UP, DOWN, GOOD, BAD } from './app/constants';
import { decrementFollowers, incrementFollowers } from './features/followers/followersSlice';
import { removePost } from './features/posts/postsSlice';

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

  play_multi_sound(s) {
    let channel_max = 6;										                          // number of channels
    let audiochannels = new Array();
    for (let a=0;a<channel_max;a++) {							                		// prepare the channels
        audiochannels[a] = new Array();
        audiochannels[a]['channel'] = new Audio();	                 	// create a new audio object
        audiochannels[a]['finished'] = -1;						                // expected end time for this channel
    }
    for (let a=0;a<audiochannels.length;a++) {
        let thistime = new Date();
        if (audiochannels[a]['finished'] < thistime.getTime()) {			// is this channel finished?
            audiochannels[a]['finished'] = thistime.getTime() + document.getElementById(s).duration*1000;
            audiochannels[a]['channel'].src = document.getElementById(s).src;
            audiochannels[a]['channel'].load();
            audiochannels[a]['channel'].play();
            break;
        }
    }
  }


  reactionHandler(e) {
    // Ensure getting the button’s id, even if the user clicks something more
    // specific
    const elementId = e.target.closest(".reaction-button").id.split("_");
    const postId = elementId[0];
    const thumb = elementId[1];

    if (this.props.post.instruction && thumb === UP) {
      console.log("CORRECT!")
      this.props.incrementFollowers();
      this.play_multi_sound('audiotag1');
    } else if (
      (thumb === UP && this.props.post.content === GOOD) ||
      (thumb === DOWN && this.props.post.content === BAD)
    ) {
      console.log("CORRECT!");
      this.props.incrementFollowers();
      this.play_multi_sound('audiotag1');
    } else {
      console.log("WRONG!!");
      this.props.decrementFollowers();
      this.play_multi_sound('audiotag2');
    }

    this.props.removePost(postId);
  }

  renderButtons() {
    return this.state.order.map((thumb, i) => {
      const icon = thumb === UP ? faThumbsUp : faThumbsDown;

      return (
        <button key={thumb} id={`${this.props.post.id}_${thumb}`} className={`reaction-button p-4 ${this.state.colors[i]}`} onClick={this.reactionHandler}>
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
  { decrementFollowers, incrementFollowers, removePost }
)(Reactions);
