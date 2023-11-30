import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
            <ItemCount className='Counter' initial={1} stock={stock} onAdd={(quantity)  => console.log('Cantidad agregada' , quantity)} />
          </footer>
        </article>
      </div>
    );
  }

 export default ItemDetail