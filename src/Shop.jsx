import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import capitalize from "../capitalize";
import ItemContainer from "../RenderItems";



const Shop = () => {

  const [categories, setCategories] = useState([])

  const {categorySelection} = useParams()

  useEffect(() => { /* do i even need an effect? */
    fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(response => setCategories(response))
          },[]);
  
    const categoryList =  categories.map((entry,index) => {
    return <li key={index}><Link to={"/shop/" + entry}>{capitalize(entry)}</Link></li> 
  })
  /* organize this piece of shit^ */
  
  return <>
  <div>HI im a shop</div>
  <div>Categories
    <ul>{categoryList}</ul>
  </div>
  <div>
    <ItemContainer category={categorySelection}/>
  </div>
  </>
};

export default Shop;
