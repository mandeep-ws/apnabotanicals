import React, {Component} from 'react';
import {
 
    Button, 
    Modal, ModalHeader, ModalBody,
    Form, FormGroup
} from 'reactstrap';
import CompCar from './Carousel'





class Home extends Component {


    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.onProductSelect = this.onProductSelect.bind(this);
       
        
        this.state = {
            selectedProduct: "",
            
            isModalOpen: false
        };
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    onProductSelect(product){
        this.setState({ selectedProduct: product });
    }


    render(){
          
        const product = this.props.powders.map(product => {
            return (

                <div key={product.id} >
                    <li  className="list-group-item"  onClick={() =>{ this.onProductSelect( product ); this.toggleModal()}} onMouseEnter={(e) => {e.target.style.background = "#3FBF6B"}} onMouseOut={(e) => {e.target.style.background = " #e7f0c3"}}>
                        {product.name}
                    </li>
                    
                </div>);
        }
        );
    
        return (
       
            <div className="container text-center home-text">
                <div class="row">
                    <div class="col-sm-6">
                        <h3>What Is Kratom?</h3>
                        <p>
                        Kratom is a tropical tree in Southeast Asia. Its leaves have been used for hundreds of years to relieve pain. They can
                        be eaten raw, but more often they're crushed and brewed as tea or turned into capsules, tablets, and liquids
                        </p>
                    </div>
                    <div class="col-sm-6">
                        <img id="Kratom-img" src="/assets/images/Kratom-Strains-2.jpg" alt="Kratom"/>
                    </div>
                </div>
                <div class="row">

                    <div class="col-12 col-sm-6">
                        <img class="d-none d-sm-inline" src="assets/images/Kratom-Strains-3.jpg" alt="kratom leaf" id="benefitsPhoto" />
                    </div>

                    <div class="col-12 col-sm-6 mt-4">

                        <h4>Our Strains</h4>

                            <ul background="whitesmoke">
                                {product}
                                
                            </ul>
                            <Button class="btn btn-sm mt-2" href="https://www.webmd.com/vitamins/ai/ingredientmono-1513/kratom" id="learnMore" onMouseEnter={(e) => {e.target.style.background = "#3FBF6B"}} onMouseOut={(e) => {e.target.style.background = " #e7f0c3"}}>Learn More</Button>
                    </div>

                    

                   
                </div>
                <div className="home-text container">
                <CompCar />
                </div>
            

            <Modal isOpen={this.state.isModalOpen} >
                            <ModalHeader toggle={this.toggleModal} >Product Info</ModalHeader>
                            <ModalBody>

                                <Form onSubmit={this.handleLogin}>

                                    <FormGroup>

                                       <img src={this.state.selectedProduct.image} width="auto" height="150" alt={this.state.selectedProduct.name} />
                                    </FormGroup>
                                    <FormGroup>
                                        <p>{this.state.selectedProduct.name}</p>
                                    </FormGroup>
                                    <Button type="submit" value="submit" color="primary">Add to Cart</Button>
                                </Form>

                            </ModalBody>
                        </Modal>
                    </div>
  
    );
}
}


export default Home;  