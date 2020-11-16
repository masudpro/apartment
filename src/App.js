import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HouseDetails from './Components/HouseDetails/HouseDetails';
import Login from './Components/Ligin/Login';

function App() {
  return (
    <div className="App">

<Router>
            <Switch>
                <Route  exact path="/">
                <Home></Home>
                </Route>
                <Route  exact path="/housedetails">
                <HouseDetails></HouseDetails>
                </Route>
                <Route  exact path="/login">
                <Login></Login>
                </Route>
            </Switch>
        </Router>
 
    </div>
  );
}

export default App;
