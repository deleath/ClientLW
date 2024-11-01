import { useParams } from "react-router-dom";
import Header from "./Header";
import React from "react";
import { useSelector } from "react-redux";

export default function Description(props) {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes);
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <h2>Рецепт не найден</h2>;
  }

  return (
    <>
      <hr />
      <div className="card mb-3" style={{ background: "#ebeae8" }}>
        <h2 className="text-center mt-3 mb-0">
          <i>{recipe.title}</i>
        </h2>
        <img
          className="card-img-top mt-3"
          src={recipe.imgURL}
          style={{
            height: "40%",
            width: "50%",
            display: "block",
            margin: "0 auto",
            borderRadius: "10px",
          }}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            <b>
              <i>Описание: </i>
            </b>
            {recipe.description}
          </p>
          <p className="card-text">
            <b>
              <i>Состав: </i>
            </b>
            <ul>
              {recipe.ingredients.map((ing) => (
                <li>{ing}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
