import React,{useEffect, useState} from 'react'
import { BasicTable } from './BasicTable'
import axios from 'axios'; 
import { SortingTable } from './SortingTable';
import Request from './Request';

function Table(){
    const [requests,setRequest]= useState([])
    
    const fetchRequests=async() =>{
        const response=await axios.get("https://localhost:7087/api/Requests");
        return response.data
    }

    useEffect(async()=>{
        
        setRequest(await fetchRequests())
        //console.log("data",response.data)
    },[])


   console.log("requests",requests)

    return(
    
        <div> 
            {requests.map((request)=>{
                return<Request fundId={request.fundId} userId={request.userId}/>
            })}
            
        </div>
    );
}

export default Table;
