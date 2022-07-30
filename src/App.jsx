import { BrowserRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom';

import Home from './views/Home/Home';
import Header from './components/Header/Header';
import Clock from './views/Clock/Clock';
import ColorChanger from './views/ColorChanger/ColorChanger';
import Dice from './views/Dice/Dice';
import Grid from './views/Grid/Grid';
import Modal from './views/Modal/Modal';
import Quote from './views/Quote/Quote';
import TextInput from './views/TextInput/TextInput';
import Window from './views/Window/Window';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>

        <Route path='/home'>
          <Home />
        </Route>
        
        <Route path='/dice'>
          <Dice />
        </Route>
        
        <Route path='/clock'>
          <Clock />
        </Route>
        
        <Route path='/quote'>
          <Quote />
        </Route>
        
        <Route path='/text-input'>
          <TextInput />
        </Route>
        
        <Route path='/color-changer'>
          <ColorChanger />
        </Route>
        
        <Route path='/grid'>
          <Grid />
        </Route>
        
        <Route path='/modal'>
          <Modal />
        </Route>
        
        <Route path='/window'>
          <Window />
        </Route>
        
        <Route path='/'>
          <Redirect to='/home' />
        </Route>

      </Switch>
    </Router>
  );
}
