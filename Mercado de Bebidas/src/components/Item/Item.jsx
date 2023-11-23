import '../Item/Item.css'



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
                    <button>Ver detalles</button>
                </footer>
            </article>
        </div>

    )
}

export default Item