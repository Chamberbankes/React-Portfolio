import React from "react";
import "./PortfolioCard.css";

const PortfolioCard = ({ title, link }) => {
  return (
    <div className="portfolio-card">
      <a href={link} className="portfolio-card-link">
        <h2>{title}</h2>
      </a>
    </div>
  );
};

export default PortfolioCard;
