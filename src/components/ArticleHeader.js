import React from 'react'


const ArticleHeader = ({ img, title, tags, difficulty}) => {
    return (
        <div class="job_details_header">
            <div class="single_jobs white-bg d-flex justify-content-between">
                <div class="jobs_left d-flex align-items-center">
                    <div class="thumb">
                        <img src="img/svg_icon/1.svg" alt="" />
                    </div>
                    <div class="jobs_conetent">
                        <a href="#"><h4>{title}</h4></a>
                        <div class="links_locat d-flex align-items-center">
                            <div class="location">
                                <p> <i class="fa fa-map-marker"></i> {tags}</p>
                            </div>
                            <div class="location">
                                <p> <i class="fa fa-clock-o"></i>{` Difficulty: ${difficulty}`}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default ArticleHeader;