import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserProfile from "./Component/UserProfile";
import ShowUsers from "./Component/ShowUsers";
import User from "./Component/User";
import {Col, Container, Row} from "react-bootstrap";

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
                        <Router>
                            <Switch>

                                <Route path="/user-profile" component={UserProfile}/>
                                <Route path="/users-show" component={ShowUsers}/>
                                <Route path="/user-show/:id" component={User}/>

                            </Switch>
                        </Router>
                    </Col>
                </Row>
            </Container>

        </div>
    );
  }
}
export default App;
