import React from "react";
import SideMenu from "../../components/SideMenu/sideMenuView";
import "./parentsView.css";

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Header from "../../components/Dashboards/Header.js";
import Agenda from "../../components/Dashboards/Agenda.js";
import Avisos from "../../components/Dashboards/Avisos.js";
import Reuniao from "../../components/Dashboards/Reuniao.js";

function ParentsPage() {
  if(Router.path === "/agenda") {
    return (
      <React.StrictMode>
        <Header/>
        <Agenda/>
      </React.StrictMode>    
    )

  } else if (Route.path === "/avisos") {
    return (
      <React.StrictMode>
        <Header/>
        <Avisos/>
      </React.StrictMode>    
    )
  } else if (Route.path === "/reuniao") {
    return (
      <React.StrictMode>
        <Header/>
        <Reuniao/>
      </React.StrictMode>    
    )
  } 
}

export default ParentsPage;
