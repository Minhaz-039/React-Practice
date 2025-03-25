import React, { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import "../style.css";
import newsArticles from "./newsArticle";

const Accordian = () => {
  const Articles = newsArticles;
  const [show, setShow] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const handleShowDescription = (id) => {
    setShow(!show);
    setShowDescription(id);
  };

  return (
    <div className="container">
      {Articles.map((article) => (
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>{article.headline}</h2>
            <button onClick={() => handleShowDescription(article.id)}>
              {show ? (
                showDescription == article.id ? (
                  <CiCircleMinus />
                ) : (
                  <CiCirclePlus />
                )
              ) : (
                <CiCirclePlus />
              )}
            </button>
          </div>
          <div>
            {show &&
              (showDescription == article.id ? (
                <p>{article.description}</p>
              ) : null)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordian;
