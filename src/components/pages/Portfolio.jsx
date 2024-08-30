import React from "react";
import PortfolioCard from "./PortfolioCard";
import "./Portfolio.css";

export const Portfolio = () => {
  const cards = [
    { title: "Concert Tracker", link: "https://github.com/akaufmanfrey/Concert-Tracker" },
    { title: "CodeSpace", link: "https://github.com/markjas0n/do-you-code" },
    { title: "README Generator", link: "https://github.com/Chamberbankes/README-Generator" },
    { title: "SVG Logo Maker", link: "https://github.com/Chamberbankes/SVG-Logo-Maker" },
    { title: "Employee Payroll Tracker", link: "https://github.com/Chamberbankes/Employee-Payroll-Tracker" },
    { title: "Ecommerce Backend", link: "https://github.com/Chamberbankes/E-Commerce-Back-End" },
  ];
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {cards.map((card, index) => (
          <PortfolioCard key={index} title={card.title} link={card.link} />
        ))}
      </div>
    </div>
  );
};
