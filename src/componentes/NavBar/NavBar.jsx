import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
// Aca tengo el navbar renderizado de la app 

export const NavBar = () => {
    return (
        <header>
            <Link to="/">
                <h1>El club del entrenamiento</h1>
            </Link>
            

            <nav>
                <ul>
                    
                    <li>
                        <NavLink to="/categoria/2">Entrenamientos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/categoria/3">Productos</NavLink>
                    </li>
                </ul>


            </nav>

            <CartWidget />


        </header>
    )
}

export default NavBar
