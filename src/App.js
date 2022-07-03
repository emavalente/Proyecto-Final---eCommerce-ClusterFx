
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>
      <NavBar name={"ClusterFX"} />
      <ItemListContainer greeting='Bienvenidos a la tienda ClusterFX' />
    </>
  );
};

export default App;
