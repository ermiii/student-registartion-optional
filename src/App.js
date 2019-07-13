import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import LogInStudents from "./components/LogInStudents";
import LogInAdmins from "./components/LogInAdmins";
import LogInMentors from "./components/LogInMentors";
import SignUpStudents from "./components/SignUpStudents";
import SignUpAdmins from "./components/SignUpAdmins";
import SignUpMentors from "./components/SignUpMentors";
// import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import NavigationBar from './components/NavigationBar'
import Jumbotron from './components/Jumbotron'
import Allsignin from './components/Allsignin'
// import AllSignUp from './components/AllSignUp'
export class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Jumbotron/>
     
        <Layout>
          <Router>
            <Allsignin />
            {/* <AllSignUp/> */}
            <Switch>
             
              <Route exact path="/Home" component={Home} />
              <Route path="/LogInStudents" component={LogInStudents} />
              <Route path="/LogInAdmins" component={LogInAdmins} />
              <Route path="/LogInMentors" component={LogInMentors} />
              <Route path="/SignUpStudents" component={SignUpStudents} />
              <Route path="/SignUpAdmins" component={SignUpAdmins} />
              <Route path="/SignUpMentors" Component={SignUpMentors} />
              {/* <Route component={ErrorPage} /> */}
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
