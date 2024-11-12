import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "../ArticleCard/ArticleCard";
import "./ArticlePage.css";
import { format } from "date-fns";

const ArticlePage = ({ searchQuery, selectedCategory }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedArticle, setSelectedArticle] = useState();

  // Fetch Api here from provided resources and stored in usestate

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f345abe97b834742aa33a01126abc556&q=${
          searchQuery ? searchQuery : ""
        }&category=${selectedCategory?.value ? selectedCategory.value : ""}`;
        const response = await axios.get(url);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [searchQuery, selectedCategory]);

  // if loading
  if (loading) return <p>Loading...</p>;

  return (
    // For web overlay
    <div
      className="container"
      style={{ gridTemplateColumns: selectedArticle ? "1fr 1fr" : undefined }}
    >
      <div className="news-fetch">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <ArticleCard
              onSelect={setSelectedArticle}
              key={index}
              article={article}
            />
          ))
        ) : (
          <p>No articles found.</p>
        )}
      </div>
      {selectedArticle && (
        <div className="side-container-main">
          <img
            src={selectedArticle.urlToImage || "./assets/india.avif"}
            alt=""
          />
          <div className="side-container">
            <h1>{selectedArticle.title}</h1>
            <div className="publisheddate">
              <h3>
                <span>short</span> by {selectedArticle.author || "Unknown"}
                <span>&nbsp;/&nbsp;</span>
              </h3>
              <h4>
                {selectedArticle.publishedAt &&
                  format(
                    new Date(selectedArticle.publishedAt),
                    "HH:mm 'on' EEEE, MMMM dd, yyyy"
                  )}
              </h4>
            </div>
            <p>{selectedArticle.description}</p>
            <p>
              Read more at <span>{selectedArticle.source.name}</span>
            </p>
          </div>
        </div>
      )}

      {/* For Mobile overlay */}
      {selectedArticle && (
        <div
          className="mobile-overlay"
          onClick={() => setSelectedArticle(null)}
        >
          <div className="mobile-article">
            <img src={selectedArticle.urlToImage} alt="" />
            <div className="mobile-article-content">
              <h1>{selectedArticle.title}</h1>
              <div className="publisheddate">
                <h3>
                  <span>short</span> by {selectedArticle.author || "Unknown"}
                  <span>&nbsp;/&nbsp;</span>
                </h3>
                <h4>
                  {selectedArticle.publishedAt &&
                    format(
                      new Date(selectedArticle.publishedAt),
                      "HH:mm 'on' EEEE, MMMM dd, yyyy"
                    )}
                </h4>
              </div>
              <p>{selectedArticle.description}</p>
              <p>
                Read more at <span>{selectedArticle.source.name}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlePage;
