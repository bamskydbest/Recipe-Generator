import { useState } from "react";
import Suggested from "./Suggested";

const Ready = () => {
  const [show, setShow] = useState(false);

  const handleRecipeBtn = () => {
    // if (show === false) {
    //   setShow(true);
    // }
    // return;
    setShow(true);
  };
  console.log(show, setShow);
  const ingredientTwo = [
    {
      id: 1,
      ingredient: "4 boneless, skinless chicken breasts",
    },
    {
      id: 2,
      ingredient: "Salt and pepper to taste",
    },
    {
      id: 3,
      ingredient: "2 tablespoons olive oil",
    },
    {
      id: 4,
      ingredient: "4 cloves garlic, minced",
    },
    {
      id: 5,
      ingredient: "1 cup heavy cream",
    },
    {
      id: 6,
      ingredient: "1/2 cup chicken brooth",
    },
    {
      id: 7,
      ingredient: "1 teaspoon italian seasoning",
    },
    {
      id: 8,
      ingredient: "1/2 cup grated parmesan cheese",
    },
    {
      id: 9,
      ingredient: "1 cup fresh spinach (optional)",
    },
    {
      id: 10,
      ingredient: "1/2 cup sun-dried tomatoes (optional)",
    },
    {
      id: 11,
      ingredient: "Fresh parsley for garnish",
    },
  ];

  const instructions = [
    {
      id: 1,
      instruction:
        "Season the Chicken: Season the chicken breasts with salt and pepper on both sides.",
    },
    {
      id: 2,
      instruction:
        "Cook the Chicken: In a large skillet, heat the olive oil over medium-high heat. Add the chicken breast and cook for 5-7 minutes on each side, or until golden brown and cooked through. Remove the chicken from the skillet and set it aside.",
    },
    {
      id: 3,
      instruction:
        "Sauté Garlic: In the same skillet, reduce the heat to minimum. Add the minced garlic and sauté for about 1 minute until fragrant.",
    },
    {
      id: 4,
      instruction:
        "Make the Sauce: Add the heavy cream,chicken brooth, the italian seasoning to the skillset. Stir to combine and bring the mixture to a stimmer.",
    },
    {
      id: 5,
      instruction:
        "Add Parmesan: Stir in the permesan cheese and let it melt into the sauce. Continue to simmer for about 2-3 minutes until the sauce thickens slightly.",
    },
    {
      id: 6,
      instruction:
        "Optional Add-ins: If using , add the fresh spinach and sun dried tomatoes to the sauce. Cook for an additional 2-3 minutes until the spinach is wilted.",
    },
    {
      id: 7,
      instruction:
        "Combine with Chicken: Return the chicken breasts to the skillet, spooning the sauce over them. Let everything simmer together for a couple of minutes until the chicken is heated through.",
    },
    {
      id: 8,
      instruction:
        "Serve: Garnish with fresh parsley and serve the chicken with the creamy garlic parmesan sauce over pasta, rice , or mashed potatoes.",
    },
  ];
  // const reveal = prop.reveal;
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

      {show === true && (
        <Suggested ingredientTwo={ingredientTwo} instructions={instructions} />
      )}
    </div>
  );
};

export default Ready;
