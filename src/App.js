import React from 'react';
import './App.css';
import  HomePage  from './pages/homepage/homepage';
import {Switch,Route} from 'react-router-dom'


const HomePage1=(props)=>{
  console.log(props)
  return(
    <h1>HOME PAGE</h1>
  )
}
const Topics=(props)=>{
  console.log(props)
  return(
    <h1>HATS PAGE</h1>
  )
}
const TopicsDetails=(props)=>{
  console.log(props)
  return(
    <h1>TOPICS DETAILS PAGE:{props.match.params.topicId}</h1>
  )
}

function App() {
  return (
    <div className="App">

      <Route  exact path='/' component={HomePage} />
      <Route exact path='/hats' component={Topics} />
      <Route path='/topics/:topicId' component={TopicsDetails} />
      
      
    
 
    </div>
  )
}

export default App;
