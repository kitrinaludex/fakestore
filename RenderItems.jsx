import ItemCard from "./src/ItemCard"

import { useEffect,useState } from "react"

const ItemContainer = ({category}) => {


    const [items,setItems] = useState([]) 

    const itemLimit = 20

    const itemCards = items.map(item => <ItemCard key={item.id} title={item.title}></ItemCard>)

    useEffect (() => {
    fetch(`https://fakestoreapi.com/products/category/${category}?limit=${itemLimit}`)
            .then(response => response.json())
            .then(response => setItems(response))
    },[category]);

    return <>{itemCards}</>
}

export default ItemContainer
