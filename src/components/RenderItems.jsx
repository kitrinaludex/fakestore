import ItemCard from "./ItemCard";

import { useEffect, useState } from "react";

const ItemContainer = ({ category }) => {
  const [items, setItems] = useState([]);
  const itemLimit = 20;

  const itemCards = items.map((item) => (
    <ItemCard key={item.id} title={item.title}></ItemCard>
  ));

  useEffect(() => {
    fetch(
      `https://fakestoreapi.com/products/category/${category}?limit=${itemLimit}`
    )
      .then((response) => response.json())
      .then((response) => setItems(response));
  }, [category]);

  return <div className="item-container">{itemCards}</div>;
};

export default ItemContainer;
