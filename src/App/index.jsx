import {AppUI} from './AppUI.jsx'
import { LandingProvider } from '../LandingContext/index.jsx';
import './App.css';

function App() {
  return (
    <LandingProvider>
      <AppUI/>
    </LandingProvider>
  );
}

export default App;
