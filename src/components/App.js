import Description from "./Desciption";
import Header from "./Header";
import RecipesList from "./RecipesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import recipeArray from "../static/recipe.json";
import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState(recipeArray);
  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />

            <Routes>
              <Route
                path="/"
                exact
                element={<RecipesList recipes={recipes} />}
              />
              <Route
                path="/desc/:id"
                element={<Description recipes={recipes} />}
              />
              <Route
                path="*"
                element={<h2 className="text-center">Данные не найдены...</h2>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
