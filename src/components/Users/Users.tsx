
import React from 'react';


type PersonT ={
    name:string;
    roll:number;
    sec ? :boolean
}


const Person : PersonT ={
    name:'ashik',
    roll:34,
    sec:true
   
}

let arrayOfPerson : PersonT[]= [
    {name:'boom', roll:45}, {name:'dhoni', roll:44, sec:false}
]


const Users : React.FC = () => {

    const name = <h1>{Person.name}</h1>

    return (
        <div>
           <h1>{name}</h1>
            
        </div>
    );
};

export default Users;