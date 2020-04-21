import React, {Component} from "react";
import {Button, Col, Form} from "react-bootstrap";

class EditUser extends Component {
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
            id: id,
            firstName: selectedItem.firstName,
            lastName: selectedItem.lastName,
            address: selectedItem.address,
            city: selectedItem.city,
            state: selectedItem.state,
            zip: selectedItem.zip,

        }

    }


    changeHandlerName = (e) => {
        this.setState({
            firstName: e.target.value,
        })
    }

    changeHandlerFamily = (e) => {
        this.setState({
            lastName: e.target.value,
        })
    }

    changeHandlerAddress = (e) => {
        this.setState({
            address: e.target.value,
        })
    }

    changeHandlerCity = (e) => {
        this.setState({
            city: e.target.value,
        })
    }

    changeHandlerState = (e) => {
        this.setState({
            state: e.target.value,
        })
    }

    changeHandlerZip = (e) => {
        this.setState({
            zip: e.target.value,
        })
    }


    clickHandlerButton = (e) => {
        e.preventDefault();
        console.log('sdsdskjdk')
        let items = JSON.parse(localStorage.getItem('items'))

        items[this.state.id] = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        }

        localStorage.setItem('items',JSON.stringify(items))

        window.location.href = '/users-show'
    }

    render() {
        return (
            <>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridFirstName">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" placeholder="Enter FirstName" ref={this.textInput}
                                          value={this.state.firstName}
                                          onChange={this.changeHandlerName}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridLastName">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text" placeholder="LastName" value={this.state.lastName}
                                          onChange={this.changeHandlerFamily}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" value={this.state.address}
                                      onChange={this.changeHandlerAddress}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control value={this.state.city} onChange={this.changeHandlerCity}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" value={this.state.state} onChange={this.changeHandlerState}>
                                <option>choose...</option>
                                <option>Single</option>
                                <option>Married</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control value={this.state.zip} onChange={this.changeHandlerZip}/>
                        </Form.Group>
                    </Form.Row>

                    <br/>

                    <Button variant="primary" type="submit" onClick={this.clickHandlerButton}>
                        Submit
                    </Button>
                </Form>
            </>
        );
    }
}


export default EditUser;