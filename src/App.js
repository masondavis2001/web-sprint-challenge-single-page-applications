import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import Pizza from "./components/Pizza";
import PizzaList from "./components/PizzaList";


const App = () => {
  // const [nameState, setNameState] = useState({
  //   name: "",
  // });

  // const addName = (newName) => {
  //   setFormState([...formState, newName]);
  // };

  return (
    <div className="App">
      <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&w=1000&q=80" alt="Pizza"></img>
      <h1>Lambda City Pizza</h1>
      <p>The best pizza delivery in the entire Northeast Lambda City region! Get the best pizza here.</p>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <p>or</p>
        <Link to="/pizza-list">Build Your Pizza!</Link>
      </div>
      <Route exact path="/pizza-list/" component={PizzaList} />
      <Route path="/" component={Pizza} />
    </div>
  );
};
export default App;
