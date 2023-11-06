import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav>
            
            <h3>Mercado de Bebidas</h3>
            <div>
                <button>Cervezas</button>
                <button>Vinos</button>
                <button>Licores</button>
                <button>Combos</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar