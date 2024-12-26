import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import capitalize from "../components/capitalize";
import ItemContainer from "../components/ItemContainer";

const Shop = () => {
  const [categorySelection, setCategory] = useState("electronics");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((response) => setCategories(response));
  }, []);

  function handleCheckboxChange(value) {
    if (value === categorySelection) {
      setCategory("");
    } else {
      setCategory(value);
    }
  }

  const categoryList = categories.map((entry, index) => {
    return (
      <li key={index}>
        <input
          type="checkbox"
          checked={categorySelection === entry}
          onChange={() => handleCheckboxChange(entry)}
        />
        {capitalize(entry)}
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
      <ItemContainer
        category={categorySelection}
        cartState={useOutletContext()}
      />
      {/* learn how destruction works */}
    </>
  );
};

export default Shop;
