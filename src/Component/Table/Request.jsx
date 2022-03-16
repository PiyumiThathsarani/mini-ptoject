export default (props)=>{
    //const name=props.name
    const {FundId,UserId}=props
    console.log("FundId,UserId",FundId,UserId)
        return(
            <>
                <p>{FundId}-{UserId}</p>
            </>
        )
}