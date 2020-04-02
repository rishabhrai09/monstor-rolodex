import React from 'react';
import{CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/searchBox/search-box.component'

import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monstor:[],
      searchFileds:""
    }
    this.handleChange=this.handleChange.bind(this)
  }

   handleChange=e=>{
    this.setState({searchFileds:e.target.value})
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users=>this.setState({monstor:users}))
  }
  render(){
    const { monstor,searchFileds}=this.state
    const filterMonster = monstor.filter(monstor=>
monstor.name.toLowerCase().includes(searchFileds.toLowerCase())
    )
  return (
    <div className="App">
      <h1 className="monstors">Monstors Roldex</h1>
      
      <SearchBox
      placeholder="search monstors"
      handleChange={this.handleChange}
      /> 
      <CardList monstor={filterMonster}/>
   
 
    </div>
  )};
}

export default App;
