import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';
import Footer1 from "./footer/Footer1"

import Home from './home/Home';
import About from './about/About';
import Login from './login/Login';
import Register from './register/Register';
import 'font-awesome/css/font-awesome.min.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" > 
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route>
            <Login/>
          </Route>
          <Route>
            <Register/>
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
