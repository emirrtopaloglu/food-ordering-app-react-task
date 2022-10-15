import Header from "./components/Layout/Header/Header";
import "./App.css";
import Feature from "./components/Layout/Feature/Feature";
import Meals from "./components/Layout/Meals/Meals";
import MealItem from "./components/UI/MealItem";
import Modal from "./components/Layout/Modal/Modal";
import CartContext from "./store/CartContext";
import { useContext, useEffect, useState } from "react";

const mealsData = [
  {
    id: 1,
    title: "Sushi",
    desc: "Delicious Chinese food",
    price: 22.99
  },
  {
    id: 2,
    title: "Meatball",
    desc: "The meatball is very nice",
    price: 17.99
  },
  {
    id: 3,
    title: "Salad",
    desc: "The salad is very nice",
    price: 12.99
  }
];

function App() {
  const ctx = useContext(CartContext);

  return (
    <div className="App">
      <Header />
      <Feature />
      <Meals>
        {mealsData.map((item) => {
          return (
            <MealItem
              key={item.id}
              item={item}
            />
          );
        })}
      </Meals>
      {
        ctx.isModalOpen && <Modal />
      }
    </div>
  );
}

export default App;
