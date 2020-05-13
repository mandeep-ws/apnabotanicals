import React, {Component} from 'react';
import {
 
    Button, 
    Modal, ModalHeader, ModalBody,
    Form, FormGroup
} from 'reactstrap';



class Home extends Component {


    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.changeBackground = this.changeBackground(this);
       
        
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

     changeBackground(e) {
       console.log("isee")
       //e.target.style.background = 'red';
      }

    render(){
            console.log(this.changeBackground)
        const product = this.props.powders.map(powder => {
            return (

                
                
                <div key={powder.id} >
                    <li  className="list-group-item"  onClick={() => { this.toggleModal()}} onMouseEnter={(e) => {e.target.style.background = "#3FBF6B"}} onMouseOut={(e) => {e.target.style.background = " whitesmoke"}}>
                        <a>{powder.name}</a>
                    </li>
                    
                </div>

                
                   
            );
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
                        <img id="Kratom-img" src="/assets/images/Kratom-Strains-2.jpg" />
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
                            <a class="btn btn-sm mt-2" href="https://www.webmd.com/vitamins/ai/ingredientmono-1513/kratom" id="learnMore">Learn More</a>
                    </div>
                </div>
            

            <Modal isOpen={this.state.isModalOpen} >
                            <ModalHeader toggle={this.toggleModal} >Product Info</ModalHeader>
                            <ModalBody>

                                <Form onSubmit={this.handleLogin}>

                                    <FormGroup>

                                       <img src="" width="auto" height="150" />
                                    </FormGroup>

                                    <FormGroup>
                                        <p></p>
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