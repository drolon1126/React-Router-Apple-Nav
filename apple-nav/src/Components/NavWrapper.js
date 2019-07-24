import React from 'react';
import Nav from './Nav';
import SubNavWrapper from './SubNavWrapper';
import SubNavPage, {Home, Support, Page404} from './SubNavPage';
import { Route, Switch } from 'react-router-dom';


export default function NavWrapper(props) {
  const subData = props.data;
  return (
    <div>
      <ul style={{height:'44px', margin:'0',backgroundColor:'#313131', display:'flex', justifyContent:'center', alignContent:'center'}}>
        {props.data.map((nav, index) => {
          return (<li key={index} style={{ textDecoration: 'none', display: "flex",alignContent:'center', margin: "10px 30px" }}><Nav key={index} dataKey={index} data={nav} /></li>);
        })}
        <li style={{ color:'white', textDecoration: 'none', display: "flex", alignContent:'center', margin: "10px 30px" }}><div>Search</div></li>
        <li style={{ color:'white', textDecoration: 'none', display: "flex", alignContent:'center', margin: "10px 30px" }}><div>Bag</div></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path='/Mac/'
          render={props => (
            <SubNavWrapper {...props} data={subData[1]} parent='Mac' dataKey={0} />
          )}
        />

        <Route
          path="/Mac/:navTitle"
          render={props => (
            <>
              <SubNavWrapper {...props} data={subData[1]} parent='Mac' dataKey={0}/>
              <SubNavPage {...props} data={subData[1]} />
            </>
          )}
        />

        <Route
          exact
          path='/Ipad'
          render={props => (
            <SubNavWrapper {...props} data={subData[2]} parent='Ipad' dataKey={1}/>
          )}
        />

        <Route
          path="/Ipad/:navTitle"
          render={props => (
            <>
              <SubNavWrapper {...props} data={subData[2]} parent='Ipad' dataKey={1}/>
              <SubNavPage {...props} data={subData[2]} />
            </>
          )}
        />

        <Route
          exact
          path='/Iphone'
          render={props => (
            <SubNavWrapper {...props} data={subData[3]} parent='Iphone' dataKey={2}/>
          )}
        />

        <Route
          path="/Iphone/:navTitle"
          render={props => (
            <>
            <SubNavWrapper {...props} data={subData[3]} parent='Iphone' dataKey={2}/>
            <SubNavPage {...props} data={subData[3]} />
            </>
          )}
        />

        <Route
          exact
          path='/Watch'
          render={props => (
            <SubNavWrapper {...props} data={subData[4]} parent='Watch' dataKey={3}/>
          )}
        />

        <Route
          path="/Watch/:navTitle"
          render={props => (
            <>
            <SubNavWrapper {...props} data={subData[4]} parent='Watch' dataKey={3}/>
            <SubNavPage {...props} data={subData[4]} />
            </>
          )}
        />

        <Route
          exact
          path='/TV'
          render={props => (
            <SubNavWrapper {...props} data={subData[5]} parent='TV' dataKey={4}/>
          )}
        />

        <Route
          path="/TV/:navTitle"
          render={props => (
            <>
            <SubNavWrapper {...props} data={subData[5]} parent='TV' dataKey={4}/>
            <SubNavPage {...props} data={subData[5]} />
            </>
          )}
        />

        <Route
          exact
          path='/Music'
          render={props => (
            <SubNavWrapper {...props} data={subData[6]} parent='Music' dataKey={5}/>
          )}
        />

        <Route
          path="/Music/:navTitle"
          render={props => (
            <>
            <SubNavWrapper {...props} data={subData[6]} parent='Music' dataKey={5}/>
            <SubNavPage {...props} data={subData[6]} />
            </>
            
          )}
        />

        <Route exact path="/Support" component={Support} />

        <Route component={Page404} />
      </Switch>
    </div>
  );
}