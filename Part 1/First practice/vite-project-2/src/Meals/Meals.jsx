import axios from "axios";
import React, { useEffect, useState } from "react";
import "../style.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const renderMeals = meals.map((meal) => {
    return (
      <div
        key={meal.idMeal}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          border: "1px solid white",
          borderRadius: "5px",
          padding: "20px",
        }}
      >
        <h3 style={{ color: "white" }}>{meal.strMeal}</h3>
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          style={{ width: "200px", height: "200px" }}
        />
      </div>
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {renderMeals}
    </div>
  );
};

export default Meals;
