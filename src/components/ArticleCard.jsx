const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState([]);
  // const [comments, setComments] = useState([]);

  useEffect(() => {
    getArticle(article_id).then((response) => {
      setArticle(response);
    });
  }, [article_id]);
};

return (
  <div className="Article">
    <h3>{article.title}</h3>
    <ul className="body">
      <li key={article.article_id}>
        <p>{article.body}</p>
      </li>
    </ul>
  </div>
);

export default Article;
