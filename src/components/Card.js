import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    Modal, ModalHeader, ModalBody, Button,
    Form, FormGroup, Input, Label
} from "reactstrap";
import Powderinfo from "./PowderInfo";




class Cardpowder extends Component {





    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.onPowderSelect = this.onPowderSelect.bind(this);
        
        this.state = {
            selectedPowder: "",
            
            isModalOpen: false
        };
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }




    onPowderSelect(powder) {

        this.setState({ selectedPowder: powder });
    }





    render() {
        
       
 
        const powder = this.props.powders.map(powder => {
            return (

                
                
                <div key={powder.id} className="col-md-3 m-1">
                    <Card onClick={() => { this.onPowderSelect( powder ); this.toggleModal(); }}>
                        <CardImg width="30%" height="30%" src={powder.image} alt={powder.name} />
                    </Card>
                    

                </div>

                
                   
            );
        });

       
        console.log(this.state.selectedPowder)        
    
        return (


           
            <div className="container">
                <div className="row">{ powder }</div>
                <Powderinfo powder={this.state.selectedPowder} />
                
                        
                        
                        
                        <Modal isOpen={this.state.isModalOpen} >
                            <ModalHeader toggle={this.toggleModal} >Product Info</ModalHeader>
                            <ModalBody>

                                <Form onSubmit={this.handleLogin}>

                                    <FormGroup>

                                       <img src={this.state.selectedPowder.image} width="auto" height="150" />
                                    </FormGroup>

                                    <FormGroup>
                                        <p>{this.state.selectedPowder.description}</p>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                </Form>

                            </ModalBody>
                        </Modal>
                </div>
            
        );
    
    }
}

export default Cardpowder;