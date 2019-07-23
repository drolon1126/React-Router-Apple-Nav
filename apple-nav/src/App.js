import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import NavWrapper from './Components/NavWrapper';
import Home from './Components/Home';


function App() {

  const navInfo = [
    {title:'Home', subLinks:[]},
    {title:'Mac', subLinks:[
      {model:'MacBook Air'},
      {model:'MacBook Pro'},
      {model:'iMac'},
    ]},
    {title:'iPad', subLinks:[
      {model:'iPad Pro'},
      {model:'iPad Air'},
      {model:'iPad'},
    ]},
    {title:'iPhone', subLinks:[
      {model:'iPhone Xs'},
      {model:'iPhone Xr'},
      {model:'iPhone 8'},
    ]},
    {title:'Watch', subLinks:[
      {model:'Apple Watch Series 4'},
      {model:'Apple Watch Nike+'},
      {model:'Apple Watch Hermes'},
    ]},
    {title:'TV', subLinks:[
      {model:'Apple TV app'},
      {model:'Apple TV+'},
      {model:'Apple TV 4K'},
    ]},
    {title:'Music', subLinks:[
      {model:'Apple Music'},
      {model:'iTunes'},
      {model:'HomePod'},
    ]},
    {title:'Support', subLinks:[]},
    {title:'Search', subLinks:[]},
    {title:'Bag', subLinks:[]}
  ];

  return (
    <div className="App">
      <NavWrapper />
      {navInfo.map((nav,i)=>{
        if(i!==8 || i!==9){
          if(i===0){
            return (
              <Route exact path="/" component={Home} />
            );
          } else {
            return(
              <Route />
            );
          }
        }
      })}
    </div>
  );
}

export default App;
