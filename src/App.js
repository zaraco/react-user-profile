import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserProfile from "./Component/UserProfile";
import ShowUsers from "./Component/ShowUsers";
import User from "./Component/User";
import EditUser from "./Component/EditUser";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";

class App extends Component{
  constructor() {
    super();
  }
  render() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <br/>
                        <Jumbotron>
                            <Router>
                                <Switch>

                                    <Route path="/user-profile" component={UserProfile}/>
                                    <Route path="/users-show" component={ShowUsers}/>
                                    <Route path="/user-show/:id" component={User}/>
                                    <Route path="/user-edit/:id" component={EditUser}/>

                                </Switch>
                            </Router>
                        </Jumbotron>

                    </Col>
                </Row>
            </Container>

        </div>
    );
  }
}
export default App;
