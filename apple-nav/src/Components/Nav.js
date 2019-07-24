import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {

  if (props.key !== 8 || props.key !== 9) {
    if (props.key === 0) {
      return (
        <>
          <NavLink exact to='/'>{props.data.title.replace(/ /g,"_")}</NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink exact to={`/${props.data.title}`}>{props.data.title.replace(/ /g,"_")}</NavLink>
        </>
      );
    }
  }
}

/*(<Route exact path="/" component={Home} />);



  if(props.key!==8||props.key!==9){
    if(props.key===0){
      return ();
    } else{
      return(
      );
    }
  }*/