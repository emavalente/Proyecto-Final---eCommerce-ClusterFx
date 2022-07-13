
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import ItemList from './components/ItemList/ItemList';


function App() {
  const PRODUCTOS = [
    {
      id: 3456789203,
      title: "titleProducto",
      price: "$1000",
      hero: "img",
      heroURL: "img.png",
    },
    {
      id: 3455589299,
      title: "titleProducto",
      price: "$1000",
      hero: "img",
      heroURL: "img.png",
    },
    {
      id: 3421789287,
      title: "titleProducto",
      price: "$1000",
      hero: "img",
      heroURL: "img.png",
    },
    {
      id: 3453489267,
      title: "titleProducto",
      price: "$1000",
      hero: "img",
      heroURL: "img.png",
    },
  ];


  const handleCount = (count) => {
    alert(`Agregaste ${count} Items al carrito`);
  };

  return (
    <>
      <NavBar name={"ClusterFX"} />
      <ItemListContainer gretting='Bienvenidos a la tienda ClusterFX'>
        <ItemList items={PRODUCTOS} />
        <ItemCount stock={5} initial={1} onAdd={handleCount} />
      </ItemListContainer>
    </>
  );
};

export default App;
