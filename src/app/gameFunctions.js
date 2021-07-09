import { INSTRUCTION_POSTS } from "./instructionPosts";
import * as constants from "./constants";
import * as posters from "./posters";

var faker = require('faker');

export const generatePost = (instructionId=null, posterId=null, content=null) => {
  // If an instructionId was passed, generate the associated instruction post.
  if (instructionId) {
    const post = INSTRUCTION_POSTS[instructionId];
    post.posterId = posters.BART;
    post.reactions = constants.UP;
    post.time = null;
    post.instruction = true;

    return post;
  }

  // Otherwise, generate a post.
  const good = Math.random() < 0.5;
  return {
		id: faker.datatype.uuid(),
		posterId: posterId || "friend",
		content: good ? constants.GOOD : constants.BAD,
		reactions: [constants.UP, constants.DOWN],
		time: 10
	}
}

export const generateText = (post) => {
  if (post.instruction) {
    return post.content;
  }

  const numberOfSentences = (Math.floor(Math.random()*3)) + 1;
  const text = faker.lorem.sentences(numberOfSentences);
  const textArray = text.split(" ");
  const randomIndex = [Math.floor(Math.random()*textArray.length)]
  const colorClass = post.content === "good" ? "text-green-500" : "text-red-500";

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
