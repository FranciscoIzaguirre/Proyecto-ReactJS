import { useEffect, useState } from "react"
import {getProducts} from "../productosVariados"
import ItemList from '../ItemList/ItemList';


const ItemListContainer = ({greeting}) => {
   const[products, setProducts] = useState([])
   
    useEffect(() =>{
        getProducts()
        .then(respone => {
            setProducts(respone)
        })
        .catch(error => {
        console.error(error)
        })
        }, [])

    
    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer