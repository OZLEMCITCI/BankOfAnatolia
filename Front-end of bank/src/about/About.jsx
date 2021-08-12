import React from 'react';
import resim1 from "../images/ebank.png";
import icon1 from "../images/about1.png";
import icon2 from "../images/about2.png";

import "./About.css"

//position-realtive :kendisi screensize gore merkezler

const About = () => {
    return (
        <div id="about" className="about-us-area p-5 bg-light">
            <div className="contanier">
                <div className="row">
                    <div className="col col-lg-5 col-md-8 align-self-center ">
                        <div className="position-relative" >{/*ekrani kucultup buyultmemiz etkilemez kendini ayarlar */}
                            <img src={ resim1} alt=""/>
                        </div>
                    </div>
                    
                    <div className="col offset-lg-1  resmin-yani">{/*offset-lg-1 iki colum arasina space koyuyor ben pl-5 kullandim ama bu daha responsive */}
                        <div>
                        <h5>About The E-banking </h5>
                        <h2 className="mb-4">Everything is possible.We can help you achieve your goals!</h2>
                        <p className="text-secondary">Internet Banking is a convenient way to do banking from the
                        comfort of your home or office. Avoid the queue or delays and
                        try our simple and secure Internet Banking facility for an
                        unmatched online banking experience.</p>
                        </div>
                        
                        <div className="row mb-3 align-items-center">
                            <div className="col-2"><img className=" icon1-media bg-primary" src={icon1} alt=""/></div>
                            <div className="col-10 text-secondary"><p>
                    Just login today using your User ID and Password to
                    experience the Internet Banking
                       </p></div>
                         
                        </div>
                        <div className="row">
                            <div className="col-2"><img className="icon2-media" src={icon2} alt=""/></div>
                            <div className="col-10 text-secondary "><p>
                    With E-Banking Check Account Statement , Do Payments using
                    Net Banking , Order Cheque Book and many more financial and
                    non-financial services
                       </p></div>
                         
                        </div>
                        
                  </div> 
              </div>  
            </div>
          

        </div>
    )
}

export default About
