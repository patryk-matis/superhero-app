import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HeroPage from './components/pages/HeroPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={HeroPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
