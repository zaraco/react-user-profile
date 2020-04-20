import React, {Component} from "react";
import {Button, Col, Form, Row, Table} from "react-bootstrap";

class ShowUsers extends Component {

    constructor(props) {
        super(props);

        let items = JSON.parse(localStorage.getItem('items'))

        if (items == null) {
            localStorage.setItem('items', JSON.stringify([]))
            items = []
        }

        console.log(items)


        this.state = {
            items: items,
            search: ''
        }
    }

    changeHandlerSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    deleteRow = (id) => {
        let newItems = this.state.items
        newItems.splice(id, 1)

        //console.log(newItems)

        localStorage.setItem('items', JSON.stringify(newItems))
        this.setState({
            items: newItems
        })
    }

    render() {
        const {items} = this.state

        let users = items.length ? items.map((item, i) =>
            <tr key={i} style={
                item.firstName.toLowerCase().includes(this.state.search.toLowerCase()) || item.lastName.toLowerCase().includes(this.state.search.toLowerCase()) || item.address.toLowerCase().includes(this.state.search.toLowerCase()) || item.city.toLowerCase().includes(this.state.search.toLowerCase()) || item.state.toLowerCase().includes(this.state.search.toLowerCase()) || item.zip.toLowerCase().includes(this.state.search.toLowerCase()) ? {
                    display: 'table-row'} : {display: 'none'}
            }>
                <th style={
                    item.firstName.length > 4 ? {background: 'red'} : {background: 'blue'}

                }>{item.firstName}</th>

                <th style={
                    item.lastName.length > 5 ? {background: 'yellow'} : {background: 'orange'}

                }>{item.lastName}</th>

                <th style={
                    item.address.length > 6 ? {background: 'pink'} : {background: 'gray'}

                }>{item.address}</th>

                <th style={
                    item.city.length > 7 ? {background: 'green'} : {background: 'violet'}

                }>{item.city}</th>

                <th style={
                    item.state.length > 3 ? {background: 'brown'} : {background: 'gold'}

                }>{item.state}</th>

                <th style={
                    item.zip.length > 2 ? {background: 'silver'} : {background: 'blue'}

                }>{item.zip}</th>

                <td>
                    <Button variant="success" size="sm" onClick={() => {
                        window.location.href = `/user-show/${i}`
                    }}>Show</Button>

                </td>
                <td>
                    <Button variant="danger" size="sm" onClick={()=>{this.deleteRow(i)}}>Delete</Button>

                </td>
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
                        <td>Show</td>
                        <td>clear</td>
                    </tr>
                    </thead>

                    <tbody>
                    {users}
                    </tbody>

                </Table>
            </>
        );
    }
}

export default ShowUsers;