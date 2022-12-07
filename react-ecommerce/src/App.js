import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import Meli from './components/MockApi/Meli';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Welcome Back!" />} /> {/* se encarga de obtener datos para listar */}
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Welcome Back!" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} /> {/* detalle de un producto*/}



        </Routes>
      </BrowserRouter>

      {/* <ItemListContainer greeting="Welcome Back!" /> */}
      {/* <Meli /> */}
    </div>
  );
}

export default App;
