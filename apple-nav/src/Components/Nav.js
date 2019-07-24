import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  //if (props.key) {
    //console.log('HI this is: ' + JSON.stringify(props) + "My key is: " + props.key +"I Have: " + JSON.stringify(props.data.subLinks[0]));
    if (props.dataKey === 0) {
      return (
        <>
          <NavLink exact to='/'>{props.data.title.replace(/ /g,"_")}</NavLink>
        </>
      );
    } else if (props.dataKey === 7){
      return (
        <>
          <NavLink exact to={`/${props.data.title}`}>{props.data.title.replace(/ /g,"_")}</NavLink>
        </>
      );
    } else{
      return (
        <>
          <NavLink exact to={`/${props.data.title}/${props.data.subLinks[0].model.replace(/ /g,"_")}/`}>{props.data.title.replace(/ /g,"_")}</NavLink>
        </>
      );
    }
  //}
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