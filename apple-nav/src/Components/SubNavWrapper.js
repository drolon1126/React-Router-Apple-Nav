import React from 'react';
import SubNav from './SubNav';

export default function SubNavWrapper(props) {
  return (
    <div style={{padding:'12px 0',height:'92px',backgroundColor:'#FAFAFA',display:'flex', justifyContent:'space-evenly'}}>
      {props.data.subLinks.map((sub,i)=>{
        return(        
        <SubNav key={i} pDataKey={props.dataKey} dataKey={i} data={sub} parent={props.parent}/>
      );})}
    </div>
  );
}