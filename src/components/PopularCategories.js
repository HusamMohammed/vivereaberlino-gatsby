import React from 'react'
import { Link } from 'gatsby'


const PopularCategories = () => {
    return (
        <div class="popular_catagory_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section_title mb-40">
                            <h3>Primi passi?</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 col-xl-3 col-md-6">
                        <div class="single_catagory">
                            <Link to="/"><h4>Voglio trasferirmi a Berlino</h4></Link>
                            <p>Tutto quello che c'é da sapere prima di trasferirsi.</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-3 col-md-6">
                        <div class="single_catagory">
                            <Link to="/"><h4>Sono appena arrivato a Berlino</h4></Link>
                            <p>Le prime cose da fare per iniziare la vita berlinese</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-3 col-md-6">
                        <div class="single_catagory">
                            <Link to="/"><h4>Vivo a Berlino</h4></Link>
                            <p>Le cose fondamentali da tenere in considerazione</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-3 col-md-6">
                        <div class="single_catagory">
                            <Link to="/"><h4>Voglio visitare Berlino</h4></Link>
                            <p>Come muoversi nella cittá e non solo!</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}


export default PopularCategories;