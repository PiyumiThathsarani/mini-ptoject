import React from 'react';
import {Link} from 'react-router-dom';
import FundList from './FundList';
import './profile.css';

function Home(){
    
    return <div>
    <div className="home transbox text-dark" >
            <div style={{textAlign:'center'}}>
            <h1>Welcome user!</h1>
            <h2>Financial Support
            Requesting Service</h2>
            <h2>for</h2>
            <h2>Villagers</h2>
            </div>
            
            <div className="transbox container availablelist">
            <FundList/>
            </div>
            
                    
    </div>
    </div>;
}
export default Home;