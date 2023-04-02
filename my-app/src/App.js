import './App.css';
import { Container, Button } from '@mui/material';
import Intro from './components/1a.Intro'
import IceCreamMenu from './components/2a.IceCreamMenu'

function App() {

  document.title="Order Ice-Cream"

  return (
      <div className="app">
        <Intro />
        <IceCreamMenu />

      </div>
  );
}

export default App;