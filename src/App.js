import React, {Component} from "react";
import DishDetail from "./components/DishDetailComponent.js";
import { DISHES } from './shared/dishes.js';
import { Navbar, NavbarBrand } from 'reactstrap';

import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>

      
    );
  }
}



export default App;
