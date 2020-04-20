import React from 'react';
import { Link } from 'react-router-dom';


function Footer(props){

    return(
<footer class="site-footer">
    <div id="footer" class="container">
        <div class="row">
            <div class="col-sm-4">

                <ul class="list-unstyled text-center">
                            <li><Link to='/home'>Home</Link></li>
                    <li><a href="aboutus.html" class="footer-links">About</a></li>
                            <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div class="col-sm-4 text-center ">

                        <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>{' '}
                        <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>{' '}
                        <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>{' '}
                <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                <p class="mt-1">2175 Terra Street, Seattle WA 98161</p>
            </div>
            <div class="col-sm-4 text-center">
                <a role="button" class="btn btn-link footer-links"  href="tel:+1-541-337-5664"><i class="fa fa-phone"></i>
            1-541-337-5664</a><br />
                <a role="button" class="btn btn-link footer-links"  href="mailto:apnabotanicals@gmail.com"><i class="fa fa-envelope-o"></i>
            apnabotanicals@gmail.com</a>
            </div>
        </div>
    </div>
</footer>
);
}

export default Footer;