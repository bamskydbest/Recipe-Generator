import React from "react";

const Ready = () => {
  function handleRecipeBtn() {
    document.getElementById("ingg").style.display = "block";
  }
  return (
    <div className="me">
      <div className="recipe-section">
        <div className="generate">
          <div className="generate-text">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <div className="generate-button">
            <button type="button" onClick={handleRecipeBtn}>
              Get a recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ready;
