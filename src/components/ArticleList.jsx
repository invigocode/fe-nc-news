function ArticleList({ articles }) {
  return (
    <div>
      <h2 className="Header">Scroll Stories</h2>
      <ul className="article-grid">
        {articles.map((article) => {
          const formattedDate = new Date(article.created_at).toLocaleString(
            "en-US",
            { month: "short", day: "2-digit", year: "numeric" }
          );
          return (
            <li className="article-card">
              <a href="" className="article-title">
                {article.title}
              </a>
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