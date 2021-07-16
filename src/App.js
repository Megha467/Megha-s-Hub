import Navb from './Navb'
import Login from './Login'
import './App.css';
import LoginForm from './LoginForm';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="Whole">
      <Navb/>
      <BrowserRouter>
      <Switch>
    <Route exact path = '/LoginForm' component = {LoginForm} /> 
    <Route exact path = '/' component = {Login} />  
    </Switch>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
