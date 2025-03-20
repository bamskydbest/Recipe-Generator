import "./App.css";

import Header from "./components/Header";
import SectionForm from "./components/SectionForm";
import Ready from "./components/Ready";
import Suggested from "./components/Suggested";
import { useState } from "react";

function App() {
  const ingredientLists = [
    // {
    //   id: 1,
    //   ingredient: "Chicken breasts",
    // },
    // {
    //   id: 2,
    //   ingredient: "Most of the main spices",
    // },
    // {
    //   id: 3,
    //   ingredient: "Olive oil",
    // },
    // {
    //   id: 4,
    //   ingredient: "Heavy cream",
    // },
    // {
    //   id: 5,
    //   ingredient: "Chicken broth",
    // },
    // {
    //   id: 6,
    //   ingredient: "Parmesan cheese",
    // },
    // {
    //   id: 7,
    //   ingredient: "Spinach",
    // },
  ];
  const [items, setItems] = useState([]);
  const [reveal, setReveal] = useState(false);

  return (
    <div className="">
      <Header />
      <SectionForm items={items} setItems={setItems} />
      {items.length > 3 && <Ready reveal={reveal} setReveal={setItems} />}
      {/* {setReveal === true && (
        <Suggested ingredientTwo={ingredientTwo} instructions={instructions} />
      )} */}
    </div>
  );
}

export default App;
