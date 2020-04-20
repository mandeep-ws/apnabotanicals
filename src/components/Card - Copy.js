import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle
} from "reactstrap";
import Powderinfo from "./PowderInfo";




class Cardpowder extends Component {





    constructor(props) {
        super(props);
        this.state = {
            selectedPowder: null
        };
    }




    onPowderSelect(powder) {

        this.setState({ selectedPowder: powder });
    }





    render() {
        const powder = this.props.powders.map(powder => {
            return (
                <div key={powder.id} className="col-md-3 m-1">
                    <Card onClick={() => this.onPowderSelect({powder})} >
                        <CardImg width="30%" height="30%" src={powder.image} alt={powder.name} />
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">{powder}</div>
                <Powderinfo powder={this.state.selectedPowder} />
                </div>
            
        );
    }
}

export default Cardpowder;