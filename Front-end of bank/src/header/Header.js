import React from 'react'
import { AppBar, Toolbar, Button, Typography , makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import "./Header.css";

const useStyles = makeStyles((theme) => ({

  root: {
    flexGrow:1
  },
  menuButon: {
  
  },
  button: {
    fontSize: "15px",
    fontWeight: "bold",
    marginLeft: "40px",

    "&:hover":{
      backgroundColor: "grey",
      color:"blue"
    },
    
  },
  spacer: {
    paddingLeft: "300px",
    
    
  },
  

 }));


const Header = () => {

  function showAboutUs() {
    const element = document.getElementById("about");
    element.scrollIntoView({behavior:"smooth"})
  }

  function showProduct() {
    const element = document.getElementById("product");
    element.scrollIntoView({behavior:"smooth"})
  }

  function showPackage() {
    const element = document.getElementById("package");
    element.scrollIntoView({behavior:"smooth"})
  }

  function showContactUs() {
    const element = document.getElementById("contactUs");
    element.scrollIntoView({behavior:"smooth"})
  }

  const classes = useStyles();

    return (
      <div className="">
        
        <AppBar position="static">
          <Toolbar variant="dense">
            
            <Link to="/"><img className="header__logo" src={ logo} alt="Logo"/></Link>
         <Typography variant="h6" color="inherit">
          MTDBANK
          </Typography>
            <Button className={classes.button} color="inherit" onClick={showAboutUs}>About us</Button>
            <Button className={classes.button}  color="inherit" onClick={showProduct}>Product</Button>
            <Button className={classes.button}  color="inherit" onClick={showPackage}>Package</Button>
            <Button className={classes.button} color="inherit" onClick={showContactUs}>Contact Us</Button>
            
        
           
           <div className="ml-auto"  ></div>
            <Link to={"/login"} className="header__link">
               <div className="header__option ">
              <span className="header__line1 ">Hello</span>
              <span className="header_line2">Sign In</span> 
            </div>
            </Link>
            <Link to={"/register"} className="header__link">
              <div className="header__option ">
              <span className="header__line1">Welcome</span>
              <span className="header_line2">Register</span> 
            </div>
             </Link>
            
            
            
            
            
              
              
  </Toolbar>
</AppBar>
 
        </div>
    );
}

export default Header
