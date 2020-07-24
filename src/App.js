import React, { useState } from "react";
import { Switch, Route, useHistory } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Completion from './components/Completion'
import Form from './components/Form'
import './App.css'

const initialForm = {
  name: '',
  size: 's',
  pepperoni: false,
  sausage: false,
  onion: false,
  mushroom: false,
  instructions: '',

}
const App = () => {
  const [form,setForm]= useState();
  const handleChange = (e) => {
    e.target.type === 'checkbox' 
    ? setForm({...form, [e.target.name]: e.target.checked})
    : setForm({...form, [e.target.name]: e.target.value})
  }
  
  return (
    <div>
    <>
      <h1>Lambda Eats</h1>
    </>
    <div>
      <Navigation />
      <Switch>
        <Route path ='/pizza'>
          <Form 
          form={form} 
          handleChange={handleChange}/>
        </Route>
        <Route path ='/complete'>
          <Completion/>
        </Route>
        <Route path ='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
    </div>
  );
};
export default App;
