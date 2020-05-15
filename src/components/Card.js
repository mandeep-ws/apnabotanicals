import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,CardLink,CardBody,
  
    Modal, ModalHeader, ModalBody, Button,
    Form, FormGroup, 
} from "reactstrap";





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

                
                
                <div key={powder.id} className="col-md-3 mt-5">
                    <Card className="text-center card-body" onClick={() => { this.onPowderSelect( powder ); this.toggleModal(); }} >
                        <CardImg width="30%" height="30%" src={powder.image} alt={powder.name} />
                        <CardImgOverlay>
                        
                        </CardImgOverlay>
                        <CardBody text-center>
                            <CardText>{powder.name} - {powder.description}</CardText>
                            <Button color="info">Shop</Button>
                          
                        </CardBody>
                    </Card>
                    

                </div>

                
                   
            );
        });

       
        console.log(this.state.selectedPowder)        
    
        return (


           
            <div className="container card-top">
                <div className="row">{ powder }</div>
                
                    <Modal className="text-center" isOpen={this.state.isModalOpen} >
                            <ModalHeader  toggle={this.toggleModal} >Product Info</ModalHeader>
                            <ModalBody>

                                <Form onSubmit={this.handleLogin}>

                                    <FormGroup >

                                       <img src={this.state.selectedPowder.image} width="auto" height="200" alt={this.state.selectedPowder.name}/>
                                       <p >{this.state.selectedPowder.name}</p>
                                    </FormGroup>

                                    <FormGroup >
                                    <p >{this.state.selectedPowder.description}</p>
                                    </FormGroup>
                                    <Button  type="submit" value="submit" color="primary">Add to Cart</Button>
                                </Form>

                            </ModalBody>
                        </Modal>
                </div>
            
        );
    
    }
}

export default Cardpowder;