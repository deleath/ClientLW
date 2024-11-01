import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function RecipesList(props) {
  const recipes = useSelector((state) => state.recipes);
  return (
    <div
      className="card"
      style={{ borderRadius: "15px", backgroundColor: "#ebeae8" }}
    >
      <ul
        className="list-group list-group-flush"
        style={{ borderRadius: "15px" }}
      >
        {recipes.map((recipe) => (
          <NavLink
            to={`desc/${recipe.id}`}
            key={recipe.id}
            className="list-group-item text-center my-2"
          >
            {recipe.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
