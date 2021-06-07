
import './App.css';
import NavBar from "./NavBar";
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
          <Route path="/showpersonal" component={ShowPersonal} />
          <Route path="/payment" component={Payment} />
          <Route path="/contact" component={Contact} />
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
