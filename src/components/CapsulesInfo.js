import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardTitle
} from "reactstrap";


class Capsulesinfo extends React.Component {


    renderPowder({capsule}) {
        return (
            <div className="col-md-3 m-1">
                <Card  >
                    <CardImg width="30%" height="30%" src={capsule.image} alt={capsule.name} />
                    <CardImgOverlay>
                     
                    </CardImgOverlay>
                </Card>
            </div>
        );
    }


    render() {

        if (this.props.capsule) {


            return (
                <div className="container">
                    <div className="row">

                        {this.renderPowder(this.props.capsule)}

                    </div>
                </div>
            );
        }



        return <div />;


    }
}

export default Capsulesinfo;