import './App.css'
import { NavBar } from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos a la tienda de Mates Gaimenses"} />
    </>
  )
}

export default App

