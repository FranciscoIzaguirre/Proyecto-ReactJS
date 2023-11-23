import  "../NavBar/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <div className="navbar">
            <h2>Mercado de Bebidas</h2>
        <button className="buttons">Cervezas</button>
        <button className="buttons">Vinos</button>
        <button className="buttons">Licores</button>
        <CartWidget />
      </div>

    )
}


export default NavBar