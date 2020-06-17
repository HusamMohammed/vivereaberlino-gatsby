import React from 'react'
import { Link } from "gatsby"
import logo from '../img/logo.png'


const Header = () => {
    return <header>
    <div class="header-area ">
        <div id="sticky-header" class="main-header-area">
            <div class="container-fluid ">
                <div class="header_bottom_border">
                    <div class="row align-items-center">
                        <div class="col-xl-3 col-lg-2">
                            <div class="logo">
                                <Link to="/">
                                    <img src={logo} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-7">
                            <div class="main-menu  d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li><Link to="/">home</Link></li>
                                        <li><a href="#">Voglio trasferirmi<i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                <li><Link to="">Foo </Link></li>
                                                <li><Link to="">Bar </Link></li>
                                                <li><Link to="">Baz </Link></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Sono a Berlino<i class="ti-angle-down"></i></a>
                                            <ul class="submenu">
                                                <li><Link to="">Foo </Link></li>
                                                <li><Link to="">Bar </Link></li>
                                                <li><Link to="">Baz </Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</header>
}


export default Header;