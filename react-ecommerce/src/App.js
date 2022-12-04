import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Meli from './components/MockApi/Meli';

// acordate de que agregaste css en la otra carpeta

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Welcome Back!" />
      {/* <Meli /> */}
    </div>
  );
}

export default App;
