import React, { useState } from "react";
import { voteOnArticle } from "../api";

const Votes = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
const [voteError, setVoteError] = useState(null);
  
function handleUpVote() {
  handleVote(1);
}

function handleDownVote() {
  handleVote(-1);
}

function handleVote(voteChange) {
  setVotes((currentVotes) => currentVotes + voteChange);
  voteOnArticle(article_id, voteChange)
  ;
}

  return (
    <>
    <div>
    <p>Votes: {votes}</p>
    <button onClick={handleUpVote}>+1</button>
    <button onClick={handleDownVote}>-1</button>
    </div>
    </>
  );
};



export default Votes;
