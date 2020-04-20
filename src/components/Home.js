import React from 'react';
import {
 
    Button, Label, Col, Row
} from 'reactstrap';


function Home(props) {
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

                        <ul class="list-group healthList list-group-flush">
                            <li class="list-group-item">Green</li>
                            <li class="list-group-item">Yellow</li>
                            <li class="list-group-item">Gold</li>
                            <li class="list-group-item">Red</li>
                            <li class="list-group-item">White</li>
                            <li><a class="btn btn-sm mt-2" href="https://www.webmd.com/vitamins/ai/ingredientmono-1513/kratom" id="learnMore">Learn More</a></li>
                        </ul>
                </div>
            </div>
        </div>
  
    );
}

export default Home;  