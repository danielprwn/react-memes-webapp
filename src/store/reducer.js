import { ADD_UPVOTES } from "./votingActions";
import { ADD_DOWNVOTES } from "./votingActions";
import { memes } from "./memesDatabase";

const updateMeme = (collection, action, value) =>
  collection.map((meme) => {
    if (meme.id === action.payload.id) {
      return (meme = {
        ...meme,
        [value]: action.payload[value],
      });
    }
    return meme;
  });

//Function for flip memes hot <-> regular
function flipMeme(fromCollection, toCollection, action) {
  fromCollection.map((meme, index) => {
    if (
      (action.payload.type === "upvotes" && meme.upvotes > 10) ||
      (action.payload.type === "downvotes" && meme.downvotes > 10)
    ) {
      const deleteElement = fromCollection.splice(index, 1);
      toCollection.push(deleteElement[0]);
    }
    return meme;
  });
}

export const reducer = (prevState = { memes }, action) => {
  const prevHot = [...prevState.memes.hot];
  const prevRegular = [...prevState.memes.regular];

  // Switch add votes i down votes
  switch (action.type) {
    case ADD_UPVOTES: {
      const hot = updateMeme(prevHot, action, "upvotes");
      const regular = updateMeme(prevRegular, action, "upvotes");

      flipMeme(regular, hot, action);

      return { memes: { hot, regular } };
    }

    case ADD_DOWNVOTES: {
      const hot = updateMeme(prevHot, action, "downvotes");
      const regular = updateMeme(prevRegular, action, "downvotes");

      flipMeme(hot, regular, action);

      return { memes: { hot, regular } };
    }

    default:
      return prevState;
  }
};
