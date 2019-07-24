import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
    if (props.dataKey === 0) {
      return (
        <>
          <NavLink exact to='/' style={{textDecoration:'none',color:'white'}}>{props.data.title.replace(/ /g,"_")}</NavLink>
        </>
      );
    } else if (props.dataKey === 7){
      return (
        <>
          <NavLink exact to={`/${props.data.title}`} style={{textDecoration:'none',color:'white'}}>{props.data.title.replace(/ /g,"_")}</NavLink>
        </>
      );
    } else{
      return (
        <>
          <NavLink exact to={`/${props.data.title}/${props.data.subLinks[0].model.replace(/ /g,"_")}/`} style={{textDecoration:'none',color:'white'}}>{props.data.title.replace(/ /g,"_")}</NavLink>
        </>
      );
    }
}