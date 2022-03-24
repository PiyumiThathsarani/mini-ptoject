/*export default (props)=>{
    //const name=props.name
    const {fundId,userId,approvalFlows}=props
    console.log("fundId,userId,approvalFlows",fundId,userId,approvalFlows)
        return(
            <>
            
            <p>{fundId}-{userId}-{approvalFlows}</p>
            
                
            </>
        )
}*/

import React from 'react'

function Request(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>FundId</th>
                    <th>UserId</th>
                    <th>ApprovalFlow</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.id}</td>
                    <td>{props.fundId}</td>
                    <td>{props.userId}</td>
                    <td>{props.approvalFlow}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Request;
