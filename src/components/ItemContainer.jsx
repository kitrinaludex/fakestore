import ItemCard from "./ItemCard";

import { useEffect, useState } from "react";

const ItemContainer = ({ cartState, category }) => {
  const [items, setItems] = useState([]);

  const { cart, setCart } = cartState;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setItems(response));
    /* add error handling */
  }, []);

  const filteredItems = items.filter(
    // render everything if theres no category
    (item) => item.category === category || category === ""
  );

  const itemCards = filteredItems.map((item) => (
    <ItemCard
      key={item.id}
      item={item}
      cart={cart}
      setCart={setCart}
    ></ItemCard>
  ));

  return <div className="item-container">{itemCards}</div>;
};

export default ItemContainer;
