import React from 'react'
import ArticleCard from './ArticleCard'


const ArticleCards = ({ articleCards, showTag}) => {
    return <div class='row'>
        {articleCards.map((articleCard, index) => {
            return <ArticleCard 
                    key={index}
                    showTag={showTag}
                    />
        })}
    </div>
}


export default ArticleCards;