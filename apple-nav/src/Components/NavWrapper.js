import React from 'react';
import Nav from './Nav';
import SubNavWrapper from './SubNavWrapper';
import SubNavPage, {Home, Page404} from './SubNavPage';
import { Route, Switch } from 'react-router-dom';
//import { Home, Mac, Ipad, Iphone, Watch, TV, Music, Support, Page404 } from './Pages';


export default function NavWrapper(props) {
  const subData = props.data;
  console.log("Testing: " + JSON.stringify(subData));
  return (
    <>
      <ul >
        {props.data.map((nav, index) => {
          return (<li key={index} style={{ textDecoration: 'none', display: "inline-block", margin: "10px" }}><Nav key={index} dataKey={index} data={nav} /></li>);
        })}
        <li style={{ textDecoration: 'none', display: "inline-block", margin: "10px" }}><div>Search</div></li>
        <li style={{ textDecoration: 'none', display: "inline-block", margin: "10px" }}><div>Bag</div></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          exact
          path='/Mac/'
          render={props => (
            <SubNavWrapper {...props} data={subData[1]} parent='Mac' />
          )}
        />

        <Route
          path="/Mac/:navTitle"
          render={props => (
            <>
              <SubNavWrapper {...props} data={subData[1]} parent='Mac' />
              <SubNavPage {...props} data={subData[1]} />
            </>
          )}
        />

        <Route
          exact
          path='/Ipad'
          render={props => (
            <SubNavWrapper {...props} data={subData[2]} parent='Ipad' />
          )}
        />

        <Route
          path="/Ipad/:navTitle"
          render={props => (
            <>
              <SubNavWrapper {...props} data={subData[2]} parent='Ipad' />
              <SubNavPage {...props} data={subData[2]} />
            </>
          )}
        />

        <Route
          exact
          path='/Iphone'
          render={props => (
            <SubNavWrapper {...props} data={subData[3]} parent='Iphone' />
          )}
        />

        <Route
          path="/Iphone/:navTitle"
          render={props => (
            <>
            <SubNavWrapper {...props} data={subData[3]} parent='Iphone' />
            <SubNavPage {...props} data={subData[3]} />
            </>
          )}
        />

        <Route
          exact
          path='/Watch'
          render={props => (
            <SubNavWrapper {...props} data={subData[4]} parent='Watch' />
          )}
        />

        <Route
          path="/Watch/:navTitle"
          render={props => (
            <>
            <SubNavWrapper {...props} data={subData[4]} parent='Watch' />
            <SubNavPage {...props} data={subData[4]} />
            </>
          )}
        />

        <Route
          exact
          path='/TV'
          render={props => (
            <SubNavWrapper {...props} data={subData[5]} parent='TV' />
          )}
        />

        <Route
          path="/TV/:navTitle"
          render={props => (
            <>
            <SubNavWrapper {...props} data={subData[5]} parent='TV' />
            <SubNavPage {...props} data={subData[5]} />
            </>
          )}
        />

        <Route
          exact
          path='/Music'
          render={props => (
            <SubNavWrapper {...props} data={subData[6]} parent='Music' />
          )}
        />

        <Route
          path="/Music/:navTitle"
          render={props => (
            <>
            <SubNavWrapper {...props} data={subData[6]} parent='Music' />
            <SubNavPage {...props} data={subData[6]} />
            </>
            
          )}
        />

        <Route
          exact
          path='/Support'
          render={props => (
            <SubNavWrapper {...props} data={subData[7]} parent='Support' />
          )}
        />
        <Route component={Page404} />
      </Switch>
    </>
  );
}