import React, { useState } from "react";

const SectionForm = (prop) => {
  const [text, setText] = useState("");

  const handleIngredientBtn = () => {
    document.getElementById("ing").style.display = "block";
  };
  return (
    <div>
      <div className="form-section">
        <div className="first-form">
          <div className="form">
            <form action="">
              <input
                type="text"
                placeholder="e.g. oregano"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </form>
          </div>
          <div className="add-button">
            <button type="button" onClick={handleIngredientBtn}>
              + Add ingredient
            </button>
          </div>
        </div>

        <div id="ing">
          <div className="ingredient">
            <h1>Ingredients on hand:</h1>
          </div>
          {prop.ingredientLists.map((ingredientLists) => {
            return (
              <div className="ingredients" key={ingredientLists.id}>
                <ul>
                  <li>{ingredientLists.ingredient}</li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
