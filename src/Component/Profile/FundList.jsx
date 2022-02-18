import React from 'react'
import FundItem from './FundItem'
import './profile.css';
import Image from './covid.jpg';

function FundList() {
    
    const fundList=[{
        id:"1",
        name:"Covid-19 Fund",
        fundAmount:{
            Amount:"Rs.5000.00"
        },
        description:"The Covid-19 Fund which is available for low income people who caused by the Corona Pandemic",
        picture: "covid.jpg",
    },
    {
        id:"2",
        name:"Samurdhi Fund",
        fundAmount:{
            Amount:"Rs.4000.00"
        },
        description:"The Samurdhi Fund is for people who are having Samurdhi Fund facility",
        picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.euro.who.int%2Fen%2Fhealth-topics%2Fhealth-emergencies%2Fcoronavirus-covid-19&psig=AOvVaw3bF4qo_15VjmjVM9xo7rkY&ust=1644753066087000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjD5vCM-vUCFQAAAAAdAAAAABAJ",
    },
    {
        id:"3",
        name:"Flood Fund",
        fundAmount:{
            Amount:"Rs.3000.00"
        },
        description:"The Flood Fund which is available for people who are suffered by the flood in 2021",
        picture:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.euro.who.int%2Fen%2Fhealth-topics%2Fhealth-emergencies%2Fcoronavirus-covid-19&psig=AOvVaw3bF4qo_15VjmjVM9xo7rkY&ust=1644753066087000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjD5vCM-vUCFQAAAAAdAAAAABAJ",
    },
    ];

    const fundListComponent=()=>{
        return(fundList.map((alist)=>{
                return(
                    <FundItem
                    key={alist.id}
                    FundName={alist.name}
                    FundAmount={alist.fundAmount.Amount}
                    Description={alist.description}
                    Image={alist.picture}
                    />
                );
            })
            
        );
    };
    
    return (
        <div className="fundlist container mt-5">
        <React.Fragment>
            <h1 className="list mb-4" style={{textAlign:'center'}}>Available Funds</h1>
            <ul>
                {fundListComponent()}
                
            </ul>
        </React.Fragment>
        </div>
    )
}

export default FundList;
