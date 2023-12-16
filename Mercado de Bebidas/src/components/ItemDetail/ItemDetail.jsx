import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link }  from 'react-router-dom'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) => {
      setQuantityAdded(quantity)
    }
    return (
      <div className='ConteinerCardFlex'>
        <article className='CardItem'>
          <header>
            <h2 className='Titulo'>
              {name}
              </h2>
          </header>
          <picture>
            <img className="fotos" src={img} alt={name} />
          </picture>
          <section>
            <p className='Info'>
              Categoria: {category}
              </p>
            <p className='Info'>
                Descripcion: {description}
              </p>
            <p className='Info'>
                Precio: ${price} 
            </p>
          </section>
          <footer className='CardFooter'>
            {
              quantityAdded > 0 ?(
                <Link to= '/cart' className='Option'>Terminar compra </Link>
              ) : (
                <ItemCount className='Counter' initial={1} stock={stock} onAdd={handleOnAdd} />
              )
            }
          </footer>
        </article>
      </div>
    );
  }

 export default ItemDetail