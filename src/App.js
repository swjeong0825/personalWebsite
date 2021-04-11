import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import NavigaitonBar from "./components/NavigationBar/NavigationBar";
import Home from "./containers/home/home";
import About from "./containers/about/about";
import Contact from "./containers/contact/contact";

function App() {
  return (
    <div className='row'>
      <div className='col-md-8 offset-md-2'>
        <NavigaitonBar />
        <Switch>
          <Route path='/about' render={() => <About />}></Route>
          <Route path='/contact' render={() => <Contact />}></Route>
          <Route path='/' render={() => <Home />}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
