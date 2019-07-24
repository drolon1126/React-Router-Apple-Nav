import React from 'react';
import SubNav from './SubNav';

export default function NavWrapper(props) {
  return (
    <>
      {props.data.subLinks.map(sub=>{
        return(        
        <SubNav data={sub} parent={props.parent}/>
      );})}
    </>
  );
}