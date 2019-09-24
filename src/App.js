import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
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

    let styles = {
      border:'1px solid green',
      backgroundColor:'green',
      color:'white',
      marginTop:'20px',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    }
    let person = null;

    const classes = [];
    if(this.state.person.length<=2){
      classes.push('red')
    }
    if(this.state.person.length<=1){
      classes.push('bold')
    }
    if(this.state.showPersons){
      person =   
        this.state.person.map((person,index)=>{
         return <Person key={index} name={person.name} age={person.age} click={this.deletePerson.bind(this,person.id)} change={(event)=>{this.changePersonName(event,person.id)}}/>
        }) 
      styles.backgroundColor = 'red'     
    }
    return (
      <div className="App">
        <p className={classes.join(' ')}>This Text will change based on persons list</p>
        <button style={styles} onClick={this.togglePerson.bind(this)}>Show Person</button>
        {person}
      </div>
    );
  }
}

export default Radium(App);
