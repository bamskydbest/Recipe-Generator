import React, { useState } from "react";

const SectionForm = (prop) => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  const handleIngredientBtn = (e) => {
    // document.getElementById("ing").style.display = "block";
    e.preventDefault();
  };
  return (
    <div>
      <div className="form-section">
        <div className="form">
          <form action="" className="first-form" onSubmit={handleIngredientBtn}>
            <div>
              <input
                type="text"
                placeholder="e.g. oregano"
                value={text.ingredientLists}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="add-button">
              <button type="submit">+ Add ingredient</button>
            </div>
          </form>
        </div>

        <div id="ing">
          <div className="ingredient">
            <h1>Ingredients on hand:</h1>
          </div>
          {prop.ingredientLists.map((ingredientLists) => {
            return (
              <div className="ingredients" key={ingredientLists.id}>
                <ul>
                  {/* <li>{ingredientLists.ingredient}</li> */}
                  {items.map((item) => {
                    return <li key={item.id}>{item.value}</li>;
                  })}
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
