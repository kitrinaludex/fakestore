import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";



const Shop = () => {
   const {categorySelection} = useParams()

  const [categories, setCategories] = useState([])

  useEffect(() => { /* do i even need an effect? */
    fetch('https://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(response => setCategories(response))
          },[/* categories */]);
    

    const categoryList =  categories.map((entry,index) => {
    return <li key={index}><Link to={"/shop/" + entry}>{entry}</Link></li>
  })

  
  return <>
  <div>HI im a shop</div>

  <div>Categories
  <ul>{categoryList}</ul>
  </div>
  </>
};

export default Shop;
