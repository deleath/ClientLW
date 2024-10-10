import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function RecipesList({ recipes, ...props }) {
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
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
