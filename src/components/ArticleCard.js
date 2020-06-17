import React from 'react'
import { Link } from 'gatsby'


const ArticleCard =({ title, img, category, difficulty, slug, tags, showTag}) => {
    return(
        <div className="col-lg-12 col-md-12">
            <div className="single_jobs white-bg d-flex justify-content-between">
                <div className="jobs_left d-flex align-items-center">
                    <div className="thumb">
                        <img src="img/svg_icon/1.svg" alt="" />
                    </div>
                    <div className="jobs_conetent">
                        <a href="job_details.html"><h4>{title}</h4></a>
                        <div className="links_locat d-flex align-items-center">
                            <div className="location">
                                <p> <i className="fa fa-map-marker"></i> {category}</p>
                            </div>
                            {
                                showTag && (<div className="location">
                                    <p> <i className="fa fa-clock-o"></i> {tags}</p>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="jobs_right">
                    <div className="apply_now">
                        <Link to={`/${slug}`} className="boxed-btn3">{showTag? "Tutto":"Leggi Tutto"}</Link>
                    </div>
                    <div className="date">
                        <p>{`difficulty: ${difficulty}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ArticleCard;