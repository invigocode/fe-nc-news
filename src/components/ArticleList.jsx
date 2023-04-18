import { useState } from "react";
import { Link } from "react-router-dom";

function ArticleList({ articles }) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="everything">
      <h2 className="Header">Scroll Stories</h2>
      <button className="category-buttons">football stories</button>
      <button className="category-buttons">cooking stories</button>
      <button className="category-buttons">coding stories</button>
      <ul className="article-grid">
        {articles.map((article) => {
          const formattedDate = new Date(article.created_at).toLocaleString(
            "en-US",
            { month: "short", day: "2-digit", year: "numeric" }
          );
          return (
            <li className="article-card">
              <Link to={`/articles/${article.article_id}`}>
                {article.title}
              </Link>
              <img src={article.article_img_url} />
              <a href="" className="article-topic">
                {article.topic}
              </a>
              <p className="article-author">written by {article.author}</p>
              <p className="article-date">{formattedDate}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ArticleList;
