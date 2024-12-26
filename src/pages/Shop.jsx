import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import capitalize from "../components/capitalize";
import ItemContainer from "../components/ItemContainer";

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
        <ul>
          <Link to={"/shop/"}>All</Link>
          {categoryList}
        </ul>
      </div>
      <ItemContainer
        category={categorySelection}
        cartState={useOutletContext()}
      />
      {/* learn how destruction works */}
    </>
  );
};

export default Shop;
