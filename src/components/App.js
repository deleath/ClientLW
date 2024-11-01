// App.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRecipes } from "./actions";
import Description from "./Desciption";
import Header from "./Header";
import RecipesList from "./RecipesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import recipeArray from "../static/recipe.json";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRecipes(recipeArray));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header />
            <Routes>
              <Route path="/" exact element={<RecipesList />} />
              <Route path="/desc/:id" element={<Description />} />
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
