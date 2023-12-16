import "../NavBar/NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/'>
                <h2 className="title">Mercado de Bebidas</h2>
            </Link>
            <div className="categories">
                <button className="buttons">
                    <NavLink to={`/category/Cervezas`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} > Cervezas </NavLink>
                </button >
                <button className="buttons">
                    <NavLink to={`/category/Vinos`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} > Vinos </NavLink>
                </button>
                <button className="buttons">
                    <NavLink to={`/category/Licores`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'} > Licores </NavLink>
                </button>
            </div>
            <CartWidget />
        </div>

    )
}


export default NavBar