import React from "react";
import NavBar from "./components/navigation/NavBar";
import { Route, Switch, useHistory } from "react-router-dom";
import PrivateRoute from "./components/utils/PrivateRoute";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import JournalDashboard from "./components/journal/JournalDashboard";
import TaskDashboard from "./components/task/TaskDashboard";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/journal" component={JournalDashboard} />
        <Route path="/task" component={TaskDashboard} />
      </Switch>
    </div>
  );
}

export default App;
