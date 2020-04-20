import React, {Component} from "react";
import {Button, Col, Figure, Row} from "react-bootstrap";

class User extends Component {
    constructor(props) {
        super(props);

        let id = this.props.match.params.id

        let items = JSON.parse(localStorage.getItem('items'))

        if (items == null) {
            localStorage.setItem('items', JSON.stringify(items))
            items = []
        }

        let selectedItem = items[id]

        this.state = {
            item: selectedItem
        }

    }
    clickHandlerBack = () => {
        window.location.href = '/users-show'
    }

    render() {
        return (

            <>
                <Row>
                    <Col md={4}>
                        <Figure>
                            <Figure.Image
                                width="100%"
                                alt="171x180"
                                src=""
                            />

                        </Figure>
                    </Col>

                    <Col>
                        <h1>
                            {this.state.item.firstName}
                        </h1>

                        <p>
                            {this.state.item.lastName}
                        </p>

                        <p>
                            {this.state.item.address} Pcs
                        </p>
                        <p>
                            {this.state.item.city}
                        </p>
                        <p>
                            {this.state.item.state}
                        </p>
                        <p>
                            {this.state.item.zip}
                        </p>

                        <Button variant="info" type="submit" onClick={this.clickHandlerBack}>
                              Back Button
                        </Button>
                    </Col>
                </Row>
            </>
        );
    }
}

export default User;