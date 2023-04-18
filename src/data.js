import axios from "axios";

const news = axios.create({
  baseURL: "https://news-4j2x.onrender.com/api",
});

export const getArticles = () => {
  return news.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
