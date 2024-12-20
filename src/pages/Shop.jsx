import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import capitalize from "../components/capitalize";
import ItemContainer from "../components/RenderItems";

const Shop = () => {
  const { categorySelection } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((response) => setCategories(response));
  }, []);

  const categoryList = categories.map((entry, index) => {
    return (
      <li key={index}>
        <Link to={"/shop/" + entry}>{capitalize(entry)}</Link>
      </li>
    );
  });

  return (
    <>
      <div>HI im a shop</div>
      <div>
        Categories
        <ul>{categoryList}</ul>
      </div>
      <ItemContainer category={categorySelection} />
    </>
  );
};

export default Shop;
