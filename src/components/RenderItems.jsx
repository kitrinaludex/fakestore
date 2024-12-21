import ItemCard from "./ItemCard";

import { useEffect, useState } from "react";

const ItemContainer = ({ cartState }) => {
  const [items, setItems] = useState([]);
  /*  const itemLimit = 20; */

  const { cart, setCart } = cartState;

  const itemCards = items.map((item) => (
    <ItemCard
      key={item.id}
      item={item}
      cart={cart}
      setCart={setCart}
    ></ItemCard>
  ));

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setItems(response));
    /* add error handling */
  }, []);
  return <div className="item-container">{itemCards}</div>;
};

export default ItemContainer;
