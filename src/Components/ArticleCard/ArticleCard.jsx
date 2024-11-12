import React from "react";
import { format } from "date-fns";
import "./ArticleCard.css";

const ArticleCard = ({ article, onSelect }) => {
  //Date Formatting
  const formattedDate = format(
    new Date(article.publishedAt),
    "HH:mm 'on' EEEE, dd MMMM yyyy"
  );

  return (
    <div className="news-card" onClick={() => onSelect(article)}>
      {/* in absence of api's image placed an alternate image of india */}
      <img
        src={
          article.urlToImage ||
          "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={article.title}
      />
      {/* Here is card details */}
      <div className="news-card-content">
        <div className="first">
          <h2>{article.title || "Unknown"}</h2>
          <div className="authordate">
            <h3>
              <span>short</span> by {article.author || "Unknown"}{" "}
              <span>&nbsp;/&nbsp;</span>
            </h3>

            <h4>{formattedDate}</h4>
          </div>
        </div>
        <p>
          {article.description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor voluptatem saepe assumenda, natus delectus officiis obcaecati totam minima? Amet, consequatur ut. Inventore aliquid, cum est delectus voluptatem optio qui."}
        </p>
        <a href={article.url} target="_blank">
          <span className="readme">Read more at</span>
          <span className="source-name">{article.source.name || ""}</span>
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
