import React from 'react';
import { NavLink } from 'react-router-dom';
import {IconUrlList} from '../Data/iconUrlList'; 

export default function SubNav(props) {

  return (
      <NavLink to={`/${props.parent}/${props.data.model.replace(/ /g,"_")}/`} style={{display:'flex', flexDirection:'column', justifyContent:'center',textDecoration:'none',color:'black',padding:'10px', fontSize:'11px'}}>
        <img style={{height:"54px"}} src={IconUrlList[props.pDataKey][props.dataKey]}/>
        {props.data.model}
      </NavLink>
  );
}