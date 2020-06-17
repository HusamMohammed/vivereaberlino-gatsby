import React from 'react'
import { Link } from "gatsby"
import logo from '../img/logo.png'


const Footer = () => {
    return <footer className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            <div className="footer_logo">
                                <a href="#">
                                    <img src={logo} alt="" />
                                </a>
                            </div>
                            <p>
                                vivereaberlino.com <br />
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-lg-2">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".4s">
                            <h3 className="footer_title">
                                Vivere a berlino.
                            </h3>
                            <ul>
                                <li><Link to="">Link utile1</Link></li>
                                <li><Link to="">Link utile2</Link></li>
                                <li><Link to="">Link utile3</Link></li>
                                <li><Link to="">Link utile4</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".5s">
                            <h3 className="footer_title">
                                Trasferirsi a Berlino
                            </h3>
                            <ul>
                                <li><Link to="">Link utile1</Link></li>
                                <li><Link to="">Link utile2</Link></li>
                                <li><Link to="">Link utile3</Link></li>
                                <li><Link to="">Link utile4</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".5s">
                            <h3 className="footer_title">
                                Visitare Berlino
                            </h3>
                            <ul>
                                <li><Link to="">Link utile1</Link></li>
                                <li><Link to="">Link utile2</Link></li>
                                <li><Link to="">Link utile3</Link></li>
                                <li><Link to="">Link utile4</Link></li>
                            </ul>
                        </div>
                    </div>
                                       
                </div>
            </div>
        </div>
        <div className="copy-right_text wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}


export default Footer;