import React from "react";
import NavBar from "./components/navigation/NavBar";
import Footer from "./components/navigation/Footer";
import { Route, Switch, useHistory } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import JournalDashboard from "./components/journal/JournalDashboard";
import Dashboard from "./components/Dashboard";
import TaskCalendar from "./components/task/TaskCalendar";
import LandingPage from "./components/landing-page/LandingPage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/journal" component={JournalDashboard} />
        <PrivateRoute path="/task" component={TaskCalendar} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
