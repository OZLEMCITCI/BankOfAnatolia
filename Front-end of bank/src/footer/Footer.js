import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.css"
import logo from "../images/logo.png"

import { Facebook, Twitter, Instagram ,Pinterest} from '@material-ui/icons';


const Footer = () => {
    return (
        <div id="contactUs">
            <footer className="footer-area">
                <div className="container">
                    <div className="footer-inner">
                        <div className="row">
                            {/*1. column*/ }
                            <div className="col-lg-3 col-md-6">
                                <div className="widget">
                                    <Link className="widget-title" to={"/"}> <img src={logo} className="footer__logo " alt="logo" />
                                        <span className="pl-3">MTD Bank</span>
                                    </Link> 
                                    <ul className="widget-list">
                    <li>112, West road, F1 456 Tram Town.</li>
                    <li>Office No 2312</li>
                    <li>info@mtdbank.com</li>
                    <li>234-3434567</li>
                    </ul>
                                </div>
                            </div>

                            {/*2. column*/ }
                            <div className="col-xl-2 col-lg-3 col-md-6 offset-lg-1">
                                <div className="widget ">
                                    <div className="widget-title ">Links</div>
                                    <ul className="widget-list">
                                        <li>
                                            <Link to={"/services"}>FAQ</Link>
                                        </li>
                                        <li>
                                            <Link to={"/about"}>About Us</Link>
                                        </li>
                                        <li>
                                            <Link to={"/contact"}>Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to={"/home"}>Home</Link>
                                        </li>
                                    </ul>
  
                             </div>
                            </div>

                            {/*3. column*/ }
                            <div className="col-xl-2 col-lg-3 col-md-6 ">
                                <div className="widget widget-title ">
                                    <div> About Us</div>
                                    <ul className="widget-list">
                                    <li>
                                    <Link to={"/"}> Ceo Message</Link>    
                                    </li>
                                    <li>
                                    <Link to={"/"}> Blog</Link>    
                                    </li>
                                    <li>
                                    <Link to={"/register"}> Register</Link>    
                                    </li>
                                    <li>
                                    <Link to={"/"}>Group</Link>    
                                    </li>

                                </ul>
                                </div>
                            
                            </div>
                            

                            {/*4. column*/ }
                            <div className="col-lg-4 col-md-6">
                                <div className="widget">
                                <div className="widget-title">Contact Us</div>
                                    <p>Please connect us with us through following channels</p>
                                    <ul className="social-area">
                                        <li>
                      <Link to={"/"}>
                        <Twitter />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Facebook />
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Instagram/>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/"}>
                        <Pinterest />
                      </Link>
                    </li>
                                    </ul>
                                </div>
                                

                            </div>
                        </div>
                </div>

                </div>
                
            </footer>
            <div className="footer-bottom bg-light">
                <div className="container">
                    <div className="row">
                    <div className="col-12 align-self-center">
                    <div className=" text-center">
                        <ul>
                            <li>
                                <Link to={"/"}>Term & Conditions</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Privacy Policy</Link>
                            </li>
                            <li>
                                <Link to={"/"}>Site Map</Link>
                            </li>

                        </ul>
                        </div>
                        </div>    
                    </div>
                </div>
                
            </div>
            <div className="col-12 justify-content-center bg-light">
              <div className="copy-right  text-center">
                                @ { new Date().getFullYear() }, MTD Bank all right reserved
              </div>
            </div>
    
        </div>
    )
}

export default Footer
