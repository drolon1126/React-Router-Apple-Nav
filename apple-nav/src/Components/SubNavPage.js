import React from 'react';

export default function SubNavPage (props) {
  const subNav = props.data.subLinks.find(
    subNav => subNav.model.replace(/ /g,"_") === props.match.params.navTitle
  );
  return(
    <>
    <h1>{`${subNav.model} Page`}</h1>
    </>
  );
}

export function Home() {
  return <h1>Home Page</h1>;
}

export function Support() {
  return <h1>Support Page</h1>;
}

export function Page404() {
  return (
    <>
      <h1>404 Error:</h1>
      <h2>Page Not Found</h2>
    </>
  );
}