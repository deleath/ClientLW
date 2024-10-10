import { useParams } from "react-router-dom";
import Header from "./Header";

export default function Description({ recipes, ...props }) {
  const { id } = useParams();
  const currentRecipe = recipes.find((recipe) => recipe.id == id);

  return (
    <>
      <Header title={currentRecipe.title} />
      <div className="card">
        <img
          className="card-img-top"
          src={currentRecipe.imgURL}
          style={{ height: "auto", width: "100%" }}
          alt="Card image cap"
        />
        <div className="card-body">
          <p className="card-text">
            <b>Описание: </b>
            {currentRecipe.description}
          </p>
          <p className="card-text">
            <b>Состав: </b>
            <ul>
              {currentRecipe.ingredients.map((ing) => (
                <li>{ing}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}
