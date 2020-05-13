import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
 
} from "reactstrap";


class Powderinfo extends React.Component{

    

  




    renderPowder(powder){

       
        return (

            <div className="col-md-3 m-1">
                <Card >
                    <CardImg width="30%" height="30%" src={powder.image} alt={powder.name} />
                    <CardImgOverlay>

                    </CardImgOverlay>
                </Card>
          

           
                
            </div>
                
                

                
       
        );
    }


    render() { 

        if (this.props.powder) {
        
                
                    return (
                        <div className="container">
                        <div className="row">
                        
                            {this.renderPowder(this.props.powder)}
                            </div>
                        
                            
                        </div>
                    );
                }
    
    
    
        return <div />;


    }
}

export default Powderinfo;

