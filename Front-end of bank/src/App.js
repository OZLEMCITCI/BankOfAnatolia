
import './App.css';
import Header from './header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from "./home/Home";
import Footer from "./footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import Register from './register/Register';
import login from './login/Login';


function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
           <ScrollToTop smooth />
          <Header/>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={ login}/>
          <Route path="/" component={Home }/>
          </Switch>
          <Footer />
          
          
        </div>
        
    
      </Router>
     
    </div>
  );
}

export default App;
