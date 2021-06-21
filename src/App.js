import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Usuario from './components/Usuario';
import Usuarios from './components/Usuarios';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Usuarios} />
        <Route path="/usuario/:id" component={Usuario} />
      </Switch>
    </Router>
  )
}

export default App

