import './App.css';
import Sidebar from './Sidebar';
import CardsGallery from './CardsGallery';


function App() {

  // penser aux propriétés d'accessibilité pour tous les components
  return (
    <div className="App flex">
    <Sidebar/>
    <CardsGallery/>
    </div>
  );
}

export default App;
