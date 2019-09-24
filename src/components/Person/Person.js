import React from 'react';
import classes from './Person.css'
const Person = (props) => {
    return ( 
        <div className={classes.Person}>
            <input className="form-control" type="string" onChange={props.change} value={props.name}></input>
            <h1 onClick={props.click}>Hi I am {props.name} and I am {props.age} years old</h1>
        </div>
     );
}
 
export default Person;
