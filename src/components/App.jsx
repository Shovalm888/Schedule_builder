import React from "react";
import Nav from "./Nav";
import ScheduleProject from "./ScheduleProject";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../index.css';


function App() {

    return (
        <Router>
            <div className="App">
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/scheduleProject" component={ScheduleProject} />
                </Switch>
            </div>
        </Router>
    );
}


// Temporary home page..
const Home = () => {

    return(
    <div className="text-center">
        <h1>Home page</h1>
    </div>
    );
}

export default App;