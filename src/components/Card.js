import React, { Component } from "react";
import {
    Card,
    CardImg,
  
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
                    <Card onClick={() => { this.onPowderSelect( powder ); this.toggleModal(); }}>
                        <CardImg width="30%" height="30%" src={powder.image} alt={powder.name} />
                    </Card>
                    

                </div>

                
                   
            );
        });

       
        console.log(this.state.selectedPowder)        
    
        return (


           
            <div className="container card-top">
                <div className="row">{ powder }</div>
                
                    <Modal isOpen={this.state.isModalOpen} >
                            <ModalHeader toggle={this.toggleModal} >Product Info</ModalHeader>
                            <ModalBody>

                                <Form onSubmit={this.handleLogin}>

                                    <FormGroup>

                                       <img src={this.state.selectedPowder.image} width="auto" height="200" alt={this.state.selectedPowder.name}/>
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