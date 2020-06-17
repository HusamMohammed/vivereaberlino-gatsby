import React from "react"
import Layout from '../components/Layout'
import Bradcam from '../components/Bradcam'
import Ats from '../components/ArticleCards'


export default function Jobs() {
    return <Layout>
        <Bradcam title="100+ guide riguardo Berlino e la Germania" />
        <div class="job_listing_area plus_padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="job_filter white-bg">
                        <div class="form_inner white-bg">
                            <h3>Filter</h3>
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="single_field">
                                            <input type="text" placeholder="Search keyword" />
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="single_field">
                                            <select class="wide" style={{display: 'none'}}>
                                                <option data-display="Category">Category</option>
                                                <option value="1">Category 1</option>
                                                <option value="2">Category 2 </option>
                                            </select>
                                            <div class="nice-select wide" tabindex="0"><span class="current">Category</span><ul class="list"><li data-value="Category" data-display="Category" class="option selected">Category</li><li data-value="1" class="option">Category 1</li><li data-value="2" class="option">Category 2 </li></ul></div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="reset_btn">
                            <button  class="boxed-btn3 w-100" type="submit">Reset</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="recent_joblist_wrap">
                        <div class="recent_joblist white-bg ">
                            <div class="row align-items-center">
                                <div class="col-md-6">
                                    <h4>Articoli</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="job_lists m-0">
                    <Ats articleCards={[1,2,3,4]} showTag/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </Layout>
}