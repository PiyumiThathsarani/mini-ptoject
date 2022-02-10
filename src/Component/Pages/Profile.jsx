import React from 'react';
import {Link} from 'react-router-dom';


function Profile(){
    
    return <div className="user_profile">
            <h1>Welcome user!</h1>
            <h2>Financial Support
            Requesting Service</h2>
            <h2>for</h2>
            <h2>Villagers</h2>

            <Link to="/Application">
            <button onSubmit="request">Request Now</button>
            </Link>
          
    </div>;
}
export default Profile;