import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ConfigButton from './components/ConfigButton/ConfigButton';
import Home from './components/Home/Home';
import PokemonsDetails from './components/PokemonsDetails/PokemonsDetails';
import PokemonsList from './components/PokemonsList/PokemonsList';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <div className='pokeball-background'></div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokemonsList/>}/>
          <Route path='/pokedex/:id' element={<PokemonsDetails/>}/>
          <Route path='/config' element={<ConfigButton/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
