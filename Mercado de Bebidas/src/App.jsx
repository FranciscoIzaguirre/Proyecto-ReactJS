import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'

function App() {
  
  return (
   <div>
    <NavBar />
    <ItemListContainer greeting={'Bienvenidos al Mercado De Bebidas'}/>
    <ItemCount initial={1} stock={10} onAdd={(quantity)  => console.log('Cantidad agregada' , quantity)} />
   </div>
  )
}

export default App
