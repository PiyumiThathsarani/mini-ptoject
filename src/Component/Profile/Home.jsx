import React from 'react';
import {Link} from 'react-router-dom';


function Home(){
    
    return <div className="home" style={{textAlign:'center'}}>
            
            
            
            <h1>Welcome user!</h1>
            <h2>Financial Support
            Requesting Service</h2>
            <h2>for</h2>
            <h2>Villagers</h2>

            <Link to="/Application">
            <button onSubmit="request" >Request Now</button>
            </Link>
          
    </div>;
}
export default Home;