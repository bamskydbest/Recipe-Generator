import React from "react";

const Suggested = (prop) => {
  return (
    <div>
      <div id="ingg">
        <div className="suggested">
          <h1>Suggested recipe:</h1>

          <p>
            Based on your available ingredients, I would recommend making a
            Creamy Garlic Parmesan <br /> Chicken dish. Here's the recipe:
          </p>
        </div>
        <div className="ingredient-two">
          <h1>Ingredients :</h1>
        </div>

        {prop.ingredientTwo.map((ingredientTwo) => {
          return (
            <div className="ingredients" key={ingredientTwo.id}>
              <ul>
                <li>{ingredientTwo.ingredient}</li>
              </ul>
            </div>
          );
        })}
        <div className="instructions">
          <div className="instructions-text">
            <h1>Instructions:</h1>
          </div>
          {prop.instructions.map((instructions) => {
            return (
              <div className="instructions-list" key={instructions.id}>
                <ul>
                  <li>
                    {instructions.id}. {instructions.instruction}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="instructions-final">
          <p>Enjoy!</p>
        </div>
      </div>
    </div>
  );
};

export default Suggested;
