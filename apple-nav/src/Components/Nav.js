import React from 'react';
import { NavLink } from 'react-router-dom';
import AppleIcon from './Assets/appleIcon.svg';

export default function Nav(props) {
    if (props.dataKey === 0) {
      return (
        <>
          <NavLink exact to='/' style={{display:'flex',alignContent:'center'}}>
            <img src={AppleIcon}/>
          </NavLink>
        </>
      );
    } else if (props.dataKey === 7){
      return (
        <>
          <NavLink exact to={`/${props.data.title}`} style={{display:'flex',alignContent:'center',textDecoration:'none',color:'white'}}>
            <div>{props.data.title}</div>
          </NavLink>
        </>
      );
    } else{
      return (
        <>
          <NavLink exact to={`/${props.data.title}/${props.data.subLinks[0].model.replace(/ /g,"_")}/`} style={{display:'flex',alignContent:'center',textDecoration:'none',color:'white'}}>
            <div>{props.data.title}</div>
          </NavLink>
        </>
      );
    }
}