import React from 'react'
import './profile.css';


function FundItem(props) {
    return (
        
        <div className=" funditem container d-flex position-relative mb-3 w-75 ">
            <div className="row">
                <div className="col">
                    <img className="image flex-shrink-0 me-3" src={props.Image}/>
                </div>
                <div className="col " style={{textAlign:'center'}}>
                    <div className="content">
                        <h5 className=" fundName  mt-2">{props.FundName}</h5>
                        <p className="description">{props.Description}</p>
                        <h6>Amount: {props.FundAmount}</h6>

                        <a href="#" className="btn stretched-link mb-3">Request Now</a>
                    </div>
                </div>
            
            </div>
        </div> 
        
    )   
}

export default FundItem;
