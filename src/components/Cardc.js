import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle
} from "reactstrap";
import Powderinfo from "./PowderInfo";
import Capsulesinfo from "./CapsulesInfo";




class Cardcapsule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedCapsule: null
        };
    }


    onCapsuleSelect(capsule) {

        this.setState({ selectedCapsule: capsule });
    }



    render() {
        const capsule = this.props.capsules.map(capsule => {
            return (
                <div key={capsule.id} className="col-md-3 m-1">
                    <Card onClick={() => this.onCapsuleSelect({ capsule })}>
                        <CardImg width="30%" height="30%" src={capsule.image} alt={capsule.name} />
                        <CardImgOverlay>
                            <CardTitle>{capsule.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">{capsule}</div>
                <Capsulesinfo capsule={this.state.selectedCapsule} />
            </div>

        );
    }
}

export default Cardcapsule;