export default (props)=>{
    //const name=props.name
    const {fundId,userId}=props
    console.log("fundId,userId",fundId,userId)
        return(
            <div>
                <p>{fundId} - {userId}</p>
            </div>
        )
}