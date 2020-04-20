import React, {Component} from "react";
import {Col, Form, Row, Table} from "react-bootstrap";

class ShowUser extends Component {
    constructor() {
        super();

        let items = JSON.parse(localStorage.getItem('items'))

        if (items == null) {
            localStorage.setItem('items', JSON.stringify([]))
            items = []
        }


        this.state = {
            items: items,
            search:''
        }
    }

    changeHandlerSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {

        const {items} = this.state

        let user = items.length ? items.map((item, i) =>
            <tr>
                <th>{item.firstName}</th>
                <th>{item.lastName}</th>
                <th>{item.address}</th>
                <th>{item.city}</th>
                <th>{item.state}</th>
                <th>{item.zip}</th>
            </tr>
        ) : null


        return (
            <>
                <Form>
                    <Form.Group as={Row} controlId="formHorizontalSearch">
                        <Form.Label column sm={2}>
                            Search
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Search..." value={this.state.search}
                                          onChange={this.changeHandlerSearch}/>
                        </Col>
                    </Form.Group>
                </Form>
                <h1>User List</h1>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                    </tr>
                    </thead>

                    <tbody>
                    {user}
                    </tbody>

                </Table>
            </>
        );
    }
}

export default ShowUser;