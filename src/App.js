
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route strict exact path= "/" component= {CharactersList } />
        <Route strict exact path= "/Search" component= {Search } />
        <Route strict exact path= "/:id" component= {Character } />
      </Switch>
    </div>
  );
}

export default App;
