import React from 'react';
import { NavLink } from 'react-router-dom';

export default function SubNav(props) {

  return (
    <>
      {/*<a
        href="#"
        style={{padding:'10px'}}
        onClick={() => props.history.push(`/${props.parent}/${props.data.model.replace(/ /g,"_")}/`)}
      >
        {props.data.model}
      </a>*/}
      <NavLink to={`/${props.parent}/${props.data.model.replace(/ /g,"_")}/`} style={{padding:'10px'}} >{props.data.model}</NavLink>
    </>
  );
}