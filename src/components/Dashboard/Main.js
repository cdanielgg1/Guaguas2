import React, { Component } from "react";    
import { Route,  NavLink, HashRouter } from "react-router-dom";    
import Conductor from "./Conductor";    
import Administracion from "./Administracion";    
import Taller from "./Taller";


class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>GUAGUAS MUNICIPALES</h1>
            <ul className="header">
              <li><NavLink to="/Conductor">Conductor</NavLink></li>
              <li><NavLink to="/Administracion">Administracion</NavLink></li>
              <li><NavLink to="/Taller">Taller</NavLink></li>
              <li><NavLink to="/Login">Salir</NavLink></li>
            </ul>
            <div className="content">
              <Route exact path="/Conductor" component={Conductor}/>
              <Route exact path="/Administracion" component={Administracion}/>
              <Route exact path="/Taller" component={Taller}/>
              <Route exact path="/Login" component={Login} />

            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default Main;