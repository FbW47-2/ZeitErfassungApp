import React from 'react';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import ShowPersonal from "./Pages/ShowPersonal";
import Payment from "./Pages/Payment";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
       <BrowserRouter>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Showpersonal" component={ShowPersonal} />
          <Route path="/Payment" component={Payment} />
          <Route path="/Contact" component={Contact} />
         
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
