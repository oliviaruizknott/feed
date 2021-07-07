import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Reactions from './Reactions';

var faker = require('faker');

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.generateText(),
    }
  }

  generateText() {
    const numberOfSentences = (Math.floor(Math.random()*3)) + 1;
    const text = faker.lorem.sentences(numberOfSentences);
    const textArray = text.split(" ");
    const randomIndex = [Math.floor(Math.random()*textArray.length)]
    const colorClass = this.props.good ? "text-green-500" : "text-red-500";

    return textArray.map((word, i) => {
      if (i == randomIndex) {
        return (
          <span key={faker.datatype.uuid()} className={colorClass}>{word} </span>
        )
      } else {
        return (
          <span key={faker.datatype.uuid()}>{word} </span>
        )
      }
    })
  }

  renderContent() {
    return (
      <div className="font-mockFlow mb-4">{this.state.text}</div>
    )
  }

  render() {
    return (
      <div className="border-4 border-purple bg-white rounded-lg m-4">
        <div className="p-4">
          <div className="flex justify-between">
            <div className="flex mb-4 items-center">
              <div className="border border-avatar bg-avatar rounded-full p-1 h-8 w-8 mr-4 text-center text-white">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div>Name</div>
            </div>
            <div>Timer</div>
          </div>
          {this.renderContent()}
        </div>
        <Reactions
          postId={this.props.id}
          good={this.props.good}
          removePost={this.props.removePost}
        />
      </div>
    );
  }
}

export default Post;
