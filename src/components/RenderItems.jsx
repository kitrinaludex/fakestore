import ItemCard from "./ItemCard";

import { useEffect, useState } from "react";

const ItemContainer = () => {
  const [items, setItems] = useState([]);
  /*  const itemLimit = 20; */

  const itemCards = items.map((item) => (
    <ItemCard
      key={item.id}
      title={item.title}
      imageurl={item.image}
      desc={item.decription}
    ></ItemCard>
  ));

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((response) => setItems(response));
    /* add error handling */
  }, []); /* discard all fetch requests when a new one comes in */
  return <div className="item-container">{itemCards}</div>;
};

export default ItemContainer;
