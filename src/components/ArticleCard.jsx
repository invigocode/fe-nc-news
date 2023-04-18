import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleCard } from "../data";
import Comments from "./Comments";

const ArticleCard = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  const [votes, setVotes] = useState(0);
  const [comments, setComments] = useState([]);
  const [IsLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    getArticleCard(article_id).then((articleAPI) => {
      setArticle(articleAPI);
      setIsloading(false);
    });
  }, [article_id]);

  if (IsLoading) {
    return <h1 className="loading-screen">Loading...</h1>;
  }
  return (
    <div className="article-card">
      <h2 className="card-title">{article.title}</h2>
      <ul>
        <li key={article.article_id}>
          <div className="author-parent">
            <h3 className="card-author"> written by {article.author}</h3>
            <h4 className="card-topic"> category {article.topic}</h4>
          </div>
          <img src={article.article_img_url} />
          <p className="article-body">{article.body}</p>
        </li>
      </ul>
      <Comments article_id={article_id} />
    </div>
  );
};

export default ArticleCard;
