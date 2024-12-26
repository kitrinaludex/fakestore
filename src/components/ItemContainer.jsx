import ItemCard from "./ItemCard";

import { useEffect, useState } from "react";

const ItemContainer = ({ cartState, category }) => {
  const [items, setItems] = useState([]);
  /*  const itemLimit = 20; */

  const { cart, setCart } = cartState;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setItems(response));
    /* add error handling */
  }, []);

  /* if category is true set items to filteredItems */

  const filteredItems = items.filter(
    (item) => item.category === category || category === undefined
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
