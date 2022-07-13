import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

import store from "./redux/store"

import "./App.css";
import Main from "./components/MainComponent";

function App() {
	return 
		<Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>

}

export default App;