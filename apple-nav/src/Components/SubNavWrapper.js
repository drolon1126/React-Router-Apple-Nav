import React from 'react';
import SubNav from './SubNav';

export default function NavWrapper(props) {
  return (
    <>
      {props.data.subLinks.map((sub,i)=>{
        return(        
        <SubNav key={i} data={sub} parent={props.parent}/>
      );})}
    </>
  );
}