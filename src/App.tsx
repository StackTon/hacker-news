import React, { useEffect, useState, ReactElement } from 'react'
import './App.scss'
import getTenArticles from './getArticles'
import { ArticleType } from './types'
import Article from './Article'

const App = (): ReactElement => {
    const [data, setData] = useState<ArticleType[]>([])

    useEffect(() => {
        getTenArticles()
            .then((data) => {
                setData(data)
            })
            .catch((e) => {
                console.error(e)
            })
    }, [])

    return (
        <div className="app">
            <h1>Hacker News</h1>
            <div className="articles">
                {data.map((article) => (
                    <Article key={article.timestamp} {...article} />
                ))}
            </div>
        </div>
    )
}

export default App
