import "./App.css";
import { getArticles } from "./data";
import ArticleList from "./components/ArticleList";
import ArticleCard from "./components/ArticleCard";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);
  const [IsLoading, setIsloading] = useState(true);

  useEffect(() => {
    setIsloading(true);
    getArticles().then((articlesApi) => {
      setArticles(articlesApi);
      setIsloading(false);
    });
  }, []);

  if (IsLoading) {
    return <h1 className="loading-screen">Loading...</h1>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList articles={articles} />} />
        <Route path="/articles" element={<ArticleList articles={articles} />} />
        <Route
          path="/articles/:article_id"
          element={<ArticleCard articles={articles} />}
        />
      </Routes>
    </div>
  );
}

export default App;
