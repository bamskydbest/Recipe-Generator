import React from "react";

const Instructions = (prop) => {
  return (
    <div>
      <div id="ing">
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

export default Instructions;
