
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {

  const handleCount = (count) => {
    alert(`Agregaste ${count} Items al carrito`);
  };

  return (
    <>
      <NavBar name={"ClusterFX"} />
      <ItemListContainer gretting='Bienvenidos a la tienda ClusterFX'>
        <ItemCount stock={5} initial={1} onAdd={handleCount} />
      </ItemListContainer>
    </>
  );
};

export default App;
