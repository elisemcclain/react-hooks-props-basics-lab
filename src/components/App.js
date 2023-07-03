import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";

function App() {
  // console.log("fromApp", user);
  return (
    <div>
      <NavBar props={user} />
      <Home name={user.name} city={user.city} color={user.color} />
      <About bio={user.bio} />
      <nav> links={user.links}</nav>
    </div>
  );
}

export default App;
