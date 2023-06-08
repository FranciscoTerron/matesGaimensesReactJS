
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
// Aca tengo el navbar renderizado de la app 

export const NavBar = () => {
    return (
        <header>
            <h1>Mates Gaimenses</h1>

            <nav>
                <ul>
                    <li>Inicio</li>
                    <li>Mates</li>
                    <li>Termos</li>
                    <li>Bombillas</li>
                </ul>


            </nav>

            <CartWidget />


        </header>
    )
}

export default NavBar
