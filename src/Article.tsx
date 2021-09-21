import React, { ReactElement } from 'react'
import { Labels } from './constants'
import { ArticleType } from './types'

const Article = (props: ArticleType): ReactElement => {
    const { title, url, timestamp, score, authorId, authorKarma } = props

    return (
        <div className="article">
            <img src="/newspaper.jpg" alt="newspaper" />
            <div className="info">
                <h3>{title}</h3>
                <div>
                    <span>{Labels.TIMESTAMP}</span>
                    {timestamp}
                </div>
                <div>
                    <span>{Labels.SCORE}</span>
                    {score}
                </div>
                <div>
                    <span>{Labels.AUTHOR_ID}</span>
                    {authorId}
                </div>
                <div>
                    <span>{Labels.AUTHOD_KARMA}</span>
                    {authorKarma}
                </div>
                <a href={url}>{Labels.FULL_ARTICLE}</a>
            </div>
        </div>
    )
}

export default Article
