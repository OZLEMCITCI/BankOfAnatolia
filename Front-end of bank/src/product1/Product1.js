import React from 'react'
import "./Product1.css";
const Product1 = (props) => {
    return (
        <div className="product">
            <div className="div product__info ">
                <h1>{props.type}</h1>
                <p>{props.benefit}</p>
                
            </div>
            
            <div className="row mt-3" >
                <div className="col-2 ">
                    <p>
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                </div>
                <div className="col-10 pl-2 "> <img className="card_img" src={props.image } alt=""/></div>
            </div>
        </div>
    )
}

export default Product1
