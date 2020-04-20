import React, { Component } from 'react';
import {
    Breadcrumb, BreadcrumbItem,
    Button, Label, Col, Row
} from 'reactstrap';
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            agree: false,
            contactType: 'By Phone',
            feedback: '',
            touched: {
                firstName: false,
                lastName: false,
                phoneNum: false,
                email: false
            }
        };


        this.handleSubmit = this.handleSubmit.bind(this);
    }





    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));

    }
render(){
    return( 
    
        <div className="container contactUs">
                <div className="row row-content">
            
            <div class="col-sm-5 col-md-8  mx-auto">
                    <LocalForm id="contactForm" onSubmit={values => this.handleSubmit(values)}>
                    <Row className="row mb-4">
                            <Col className="col-md-8 col-sm-5 col-8 mx-auto my-4">
                            <h4>Have any questions? Lets chat!!!</h4>
                        </Col>
                    </Row>
                        <Row className="form-group">
                            <Label htmlFor="firstName" md={1}>Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstName" id="firstName" name="name"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(2),
                                        maxLength: maxLength(15)
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".firstName"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="email" md={1}>Email</Label>
                            <Col md={10}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    validators={{
                                        required,
                                        validEmail
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid email address'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="phoneNum" md={1}>Phone</Label>
                            <Col md={10}>
                                <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                    placeholder="Phone number"
                                    className="form-control"
                                    validators={{
                                        required,
                                        minLength: minLength(10),
                                        maxLength: maxLength(15),
                                        isNumber
                                    }} />
                                <Errors
                                    className="text-danger"
                                    model=".phoneNum"
                                    show="touched"
                                    component="div"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be at least 10 numbers',
                                        maxLength: 'Must be 15 numbers or less',
                                        isNumber: 'Must be a number'
                                    }} />
                            </Col>
                        </Row>
                        <Row className="form-group mx-auto">
                                <Label htmlFor="feedback" md={1}>Feedback</Label>
                            <Col md={12}>
                                <Control.textarea model=".feedback" id="feedback" name="feedback"
                                    rows="12"
                                    className="form-control"
                                />
                            </Col>
                        </Row>
                        <Row className="form-group mx-auto">
                            <Col md={{ size: 10, offset: 1 }}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                    </Button>
                            </Col>
                        </Row>
                      
                </LocalForm>
       </div>
       </div>
    </div>
    );
}
}

export default Contact;        