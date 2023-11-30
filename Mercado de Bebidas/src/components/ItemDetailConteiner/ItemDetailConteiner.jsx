import './ItemDetailConteiner.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../productosVariados'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState(null)

    const {itemID} = useParams()
    useEffect(() => {
        getProductById(itemID)
            .then((response) => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
     }, [itemID])

     return(
        <div className="itemDetaiConteiner">
            <ItemDetail {...product} />
        </div>
     )
}


export default ItemDetailConteiner