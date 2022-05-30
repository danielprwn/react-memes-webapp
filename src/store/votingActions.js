export const ADD_UPVOTES = "ADD_UPVOTES";
export const ADD_DOWNVOTES = "ADD_DOWNVOTES";

// Upvote and downvote function
export const upVotes = ({ upvotes, id, type }) => ({
  type: "ADD_UPVOTES",
  payload: {
    upvotes: upvotes + 1,
    id,
    type,
  },
});

export const downVotes = ({ downvotes, id, type }) => ({
  type: "ADD_DOWNVOTES",
  payload: {
    downvotes: downvotes + 1,
    id,
    type,
  },
});
