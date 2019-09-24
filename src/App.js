import React, { Component } from 'react';
import classes from './App.css';
import Person from './components/Person/Person'

class App extends Component {
  state={
    person:[
      {id:"asd23",name:"Avinash",age:30},
      {id:"klojlj3",name:"Jack",age:33},
      {id:"asd00",name:"Dina",age:25}
    ],
    otherState:"This is other state",
    showPersons:false
  }
  handleButtonClick(){
    this.setState({
      person:[
        {name:"Jane",age:30},
        {name:"Jack",age:33},
        {name:"Dina",age:27}
      ] 
    });
    console.log(this.state)
  }
  handleChange(event){
    this.setState({
      person:[
        {name:event.target.value,age:30},
        {name:"Jack",age:33},
        {name:"Dina",age:27}
      ] 
    })
  }
  togglePerson(){
    const showPersons = this.state.showPersons;
    this.setState({showPersons:!showPersons})
  }

  changePersonName(event,id){
    const personIndex = this.state.person.findIndex(person =>{
      return person.id === id
    })

    const person = this.state.person[personIndex];
    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({person:persons});
  }
  deletePerson(id){
    const personIndex = this.state.person.findIndex(person =>{
      return person.id === id
    })
    const person = this.state.person.slice();
    person.splice(personIndex,1);

    this.setState({person:person});
  }
  render(){

    let person = null;
    let btnClass = null;
    const assignedclasses = [];
    if(this.state.person.length<=2){
      assignedclasses.push(classes.Red)
    }
    if(this.state.person.length<=1){
      assignedclasses.push(classes.Bold)
    }
    if(this.state.showPersons){
      person =   
        this.state.person.map((person,index)=>{
         return <Person key={index} name={person.name} age={person.age} click={this.deletePerson.bind(this,person.id)} change={(event)=>{this.changePersonName(event,person.id)}}/>
        }) 
      btnClass = classes.Red;
    }
    return (
      <div className={classes.App}>
        <p className={assignedclasses.join(' ')}>This Text will change based on persons list</p>
        <button className= {btnClass} onClick={this.togglePerson.bind(this)}>Show Person</button>
        {person}
      </div>
    );
  }
}

export default App;
