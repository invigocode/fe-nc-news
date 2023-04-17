import "./App.css";
import { getArticles } from "./components/data";
import ArticleList from "./components/ArticleList";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((articlesApi) => {
      setArticles(articlesApi);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ArticleList articles={articles} />} />
      </Routes>
    </div>
  );
}

export default App;
