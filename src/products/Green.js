import React, { Component } from "react";
import {
    Card,
    CardImg,
    Modal, ModalHeader, ModalBody, Button,
    Form, FormGroup
} from "reactstrap";





class Product extends Component {


   

    renderProduct(product){

       
        return (

            <div className="col-md-3 m-1">
                <Card >
                    <CardImg width="30%" height="30%" src={product.image} alt={product.name} />
                    <CardImgOverlay>

                    </CardImgOverlay>
                </Card>
          

           
                
            </div>
                
                

                
       
        );
    }

    




    render() {
                
            return (


           
            <div className="container">
               
                 {renderProduct}
                    
                </div>
            
        );
    
    }
}

export default Product;