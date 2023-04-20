import { useEffect, useState } from "react";
import { getComments } from "../data";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((commentsAPI) => {
      setComments(commentsAPI);
      setIsLoading(false);
    });
  }, [article_id]);

  if (IsLoading) {
    return <h1 className="loading-screen">comments loading...</h1>;
  }

  if (comments.length === 0) {
    return <h2>no comments to show</h2>;
  }

  return (
    <div>
      <h3>comments</h3>
      <form className="comment-form" onSubmit={handleSubmit}>
        <div htmlFor="comment">
          <input placeholder="add comment..."></input>
          <button type="submit">comment</button>
        </div>
      </form>
      {comments.map((comment) => {
        return (
          <li className="comment-box">
            <p className="comment-author">username: {comment.author}</p>
            <p className="comment-body">comments: {comment.body}</p>
            <p className="comment-votes">votes: {comment.votes}</p>
          </li>
        );
      })}
    </div>
  );
};

export default Comments;
