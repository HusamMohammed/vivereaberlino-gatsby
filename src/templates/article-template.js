import React from 'react'
import Layout from '../components/Layout'
import ArticleHeader from '../components/ArticleHeader'
import ArticleAbout from '../components/ArticleAbout'


const ArticleTemp = () => {
    return <Layout>
        <div class="job_details_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <ArticleHeader 
                      title=""
                      img=""
                      tags=""
                      difficulty=""
                    />
                    <div class="descript_wrap white-bg">

                    </div>
                </div>
                <div class="col-lg-4">
                    <ArticleAbout
                        date=""
                        category=""
                        location=""
                    />
                </div>
            </div>
        </div>
        </div>
    </Layout>
}


export default ArticleTemp;