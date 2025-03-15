import { useState } from "react";

const SectionForm = (prop) => {
  const items = prop.items;
  const [text, setText] = useState("");

  const handleIngredientBtn = (e) => {
    e.preventDefault();
    prop.setItems([...items, text]);
    setText("");
  };
  return (
    <div>
      <h1>Please Input Ingredients Below</h1>
      <div className="form-section">
        <div className="form">
          <form className="first-form" onSubmit={handleIngredientBtn}>
            <div>
              <input
                type="text"
                placeholder="e.g. oregano"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="add-button">
              <button type="submit">+ Add ingredient</button>
            </div>
          </form>
        </div>

        {items.length > 0 && (
          <div className="ingredient">
            <h1>
              Ingredients on hand (Ingredients must be more than four(4)):
            </h1>
          </div>
        )}
        <div className="ingredients" key={items.id}>
          {items.map((item) => {
            return (
              <ul>
                <li key={item}>{item}</li>
              </ul>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionForm;
