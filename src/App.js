import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserProfile from "./Component/UserProfile";
import ShowUser from "./Component/ShowUser";
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
                                <Route path="/user-show" component={ShowUser}/>
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
