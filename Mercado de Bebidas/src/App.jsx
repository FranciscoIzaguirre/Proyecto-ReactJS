import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
  return (
   <div>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos al Mercado De Bebidas'}/>
   </div>
  )
}

export default App
