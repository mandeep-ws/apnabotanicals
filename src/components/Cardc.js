import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,CardText,CardBody,
    Modal, ModalHeader, ModalBody, Button,
    Form, FormGroup
} from "reactstrap";





class Cardcapsule extends Component {

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.onCapsuleSelect = this.onCapsuleSelect.bind(this);
        this.state = {
            selectedCapsule: "",
            isModalOpen: false
        }
        }
    
        onCapsuleSelect(capsule) {

            this.setState({ selectedCapsule: capsule });
        }

    

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }



    render() {
        const capsule = this.props.capsules.map(capsule => {
            return (
                <div key={capsule.id} className="col-md-3 mt-5">
                      <Card className="text-center card-body" onClick={() => { this.onCapsuleSelect( capsule ); this.toggleModal(); }}>
                        <CardImg width="20%" height="20%" src={capsule.image} alt={capsule.name} />
                        <CardImgOverlay>

                        </CardImgOverlay>
                        <CardBody text-center>
                            <CardText>{capsule.name} - {capsule.description}</CardText>
                            <Button color="info">Shop</Button>
                          
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">{capsule}</div>

                <Modal isOpen={this.state.isModalOpen} >
                            <ModalHeader toggle={this.toggleModal} >Product Info</ModalHeader>
                            <ModalBody>

                                <Form onSubmit={this.handleLogin}>

                                    <FormGroup>

                                       <img src={this.state.selectedCapsule.image} width="auto" height="200" alt={this.state.selectedCapsule.name} />
                                    </FormGroup>

                                    <FormGroup>
                                        <p>{this.state.selectedCapsule.description}</p>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                </Form>

                            </ModalBody>
                        </Modal>
                
            </div>

        );
    }
}

export default Cardcapsule;