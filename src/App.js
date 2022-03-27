import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PokemonsDetails from './components/PokemonsDetails/PokemonsDetails';
import PokemonsList from './components/PokemonsList/PokemonsList';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokemonsList/>}/>
          <Route path='/pokedex/:id' element={<PokemonsDetails/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
