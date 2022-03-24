import React,{useEffect, useState} from 'react'
import FundItem from './FundItem'
import './profile.css';

import axios from 'axios';


function FundList() {
    

    const [fundlist,setFundList]= useState([])
    

    const fetchFunds=async() =>{
        console.log("a");
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const response=await axios.get("https://localhost:7087/api/Funds");
        console.log(response);
        return response.data
    }

    useEffect(async()=>{
        
        setFundList(await fetchFunds())
        //console.log("data",response.data)
    },[])

    const fundListComponent=()=>{
        return(fundlist.map((alist)=>{
                return(
                    <FundItem
                    key={alist.id}
                    FundName={alist.name}
                    FundAmount={alist.fundAmount}
                    Description={alist.description}
                    Image={alist.imagePath}
                    />
                );
            })
            
        );
    };

    
    return (
        <div className="fundlist container mt-5 ">
        <React.Fragment>
            <h1 className="list mb-4 " style={{textAlign:'center'}}>Available Funds</h1>
            <ul>
                {fundListComponent()}
                
            </ul>
        </React.Fragment>
        </div>
    )
}

export default FundList;
