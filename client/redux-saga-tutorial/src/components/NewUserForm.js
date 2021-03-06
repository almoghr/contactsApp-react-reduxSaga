import React, { Component } from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

class NewUserForm extends Component {

    state = {
        firstName: '',
        lastName: ''
    }

    handleFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value })
    }
    handleLastNameChange = (e) => {
        this.setState({ lastName: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit({
            firstName: this.state.firstName[0].toUpperCase() + this.state.firstName.slice(1),
            lastName: this.state.lastName[0].toUpperCase() + this.state.lastName.slice(1)
        });

        this.setState({
            firstName:'',
            lastName:''
        });
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                    <Label>
                       First name
                    </Label>
                    <Input 
                        required
                        placeholder="First name" 
                        onChange={this.handleFirstNameChange} 
                        value={this.state.firstName}>
                    </Input>
                </FormGroup> 
               <FormGroup>
                    <Label>
                       Last name
                    </Label>
                    <Input 
                        required
                        placeholder="Last name" 
                        onChange={this.handleLastNameChange} 
                        value={this.state.lastName}>
                    </Input>
                </FormGroup> 
                <FormGroup>
                    <Button block outline type="submit" color="primary">
                        Create
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default NewUserForm;