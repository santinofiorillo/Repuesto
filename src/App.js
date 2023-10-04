import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {ItemListContainer,NavBar} from './components/index';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;