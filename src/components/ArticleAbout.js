import React from 'react'


const ArticleAbout = ({ date, category, location}) => {
    return <div>
        <div class="job_sumary">
            <div class="summery_header">
                <h3>About the article</h3>
            </div>
            <div class="job_content">
                <ul>
                    <li>Published on: <span>{date}</span></li>
                    <li>Category: <span>{category}</span></li>
                    <li>Location: <span>{location}</span></li>
                </ul>
            </div>
        </div>
        <div class="share_wrap d-flex">
            <span>Share at:</span>
            <ul>
                <li><a href="#"> <i class="fa fa-facebook"></i></a> </li>
                <li><a href="#"> <i class="fa fa-google-plus"></i></a> </li>
                <li><a href="#"> <i class="fa fa-twitter"></i></a> </li>
                <li><a href="#"> <i class="fa fa-envelope"></i></a> </li>
            </ul>
        </div>
    </div>
}


export default ArticleAbout;