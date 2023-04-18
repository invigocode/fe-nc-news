import "./App.css";
import { getArticles } from "./data";
import ArticleList from "./components/ArticleList";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);
  const [IsLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    getArticles().then((articlesApi) => {
      setArticles(articlesApi);
      setIsloading(false);
    });
  }, []);

  if (IsLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList articles={articles} />} />
      </Routes>
    </div>
  );
}

export default App;
