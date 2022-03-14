import React,{useEffect, useState} from 'react'
import { BasicTable } from './BasicTable'
import axios from 'axios'; 
import { SortingTable } from './SortingTable';
import Request from './Request';

function Table(){
    const [requests,setRequest]= useState([])
    
    useEffect(async()=>{
        const response=await axios.get("https://localhost:7087/api/Requests");
        setRequest(response.data)
        //console.log("data",response.data)
    },[])


   console.log("requests",requests)

    return(
    
        <div> 
            {requests.map((request,index)=>{
                return<Request key={index} fundId={request.fundId} userId={request.userId}/>
            })}
            
        </div>
    );
}

export default Table;
