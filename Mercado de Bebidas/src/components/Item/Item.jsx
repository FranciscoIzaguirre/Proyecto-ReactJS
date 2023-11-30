import './Item.css';
import {Link} from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
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
            Precio: ${price}
          </p>
          <p className='Info'>
            Stock: {stock}
          </p>
        </section>
        <footer className='CardFooter'>
        <Link to={'/item/${id}'} className='Option'>Ver detalle </Link>
        </footer>
      </article>
    </div>
  );
}

export default Item