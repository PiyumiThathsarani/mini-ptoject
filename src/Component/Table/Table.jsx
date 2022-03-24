import React,{useEffect, useState} from 'react'
import { BasicTable } from './BasicTable'
import axios from 'axios'; 
import { SortingTable } from './SortingTable';
import Request from './Request';

function Table(){
    const [requests,setRequest]= useState([])
    

    const fetchRequests=async() =>{
        console.log("a");
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        const response=await axios.get("https://localhost:7087/api/Requests");
        console.log(response);
        return response.data
    }

    useEffect(async()=>{
        
        setRequest(await fetchRequests())
        //console.log("data",response.data)
    },[])


   console.log("requests",requests)

   const fundRequestComponent=()=>{
    return(requests.map((request)=>{
            return(
                <Request
                key={request.id}
                id={request.id}
                fundId={request.fundId}
                userId={request.userId}
                approvalFlow={request.approvalFlow}
                
                />
            );
        })
        
    );
};


    return(
    
        <div>
        
            <h1 className="list mb-4 " style={{textAlign:'center'}}>Available FundRequests List</h1>
            <ul>
                {fundRequestComponent()}
                
            </ul>
       
        </div>
    );
}

export default Table;
