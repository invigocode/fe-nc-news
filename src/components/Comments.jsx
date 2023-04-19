import { useEffect, useState } from "react";
import { getComments } from "../data";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id).then((commentsAPI) => {
      setComments(commentsAPI);
      setIsLoading(false);
    });
  }, []);
  return (
    <div>
      <h3>comments</h3>
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
