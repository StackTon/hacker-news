import axios from 'axios'
import { baseURL, apiRoutes } from './constants'
import { ArticleDataType, ArticleType, UserDataType } from './types'

const requester = axios.create({
    baseURL
})

const getRandomItem = <Item>(arr: Item[]): Item => {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
}

const getTenRandomArticlesId = (allArticles: string[]): string[] => {
    if (allArticles.length <= 10) {
        return allArticles
    }

    const tenRandomArticles = new Set<string>()

    while (tenRandomArticles.size < 10) {
        const randomArticle = getRandomItem(allArticles)
        tenRandomArticles.add(randomArticle)
    }

    return Array.from(tenRandomArticles)
}

const getTenArticles = async (): Promise<ArticleType[]> => {
    const formatterArticlesData: ArticleType[] = []
    try {
        const allArticlesIdReqeust = await requester.get(
            apiRoutes.getTopstories
        )
        const allArticlesId = allArticlesIdReqeust.data as string[]

        const tenRandomArticlesId = getTenRandomArticlesId(allArticlesId)

        const tenRandomArticlesRequests = tenRandomArticlesId.map((articleId) =>
            requester.get(apiRoutes.getItem(articleId))
        )

        const tenRandomArticlesResponse = await Promise.all(
            tenRandomArticlesRequests
        )

        const tenRandomArticlesData = tenRandomArticlesResponse.map(
            (response) => response.data
        ) as ArticleDataType[]

        const userRequests = tenRandomArticlesData.map((article) =>
            requester.get(apiRoutes.getUser(article.by))
        )

        const userResponse = await Promise.all(userRequests)

        const userData = userResponse.map(
            (responce) => responce.data
        ) as UserDataType[]

        for (let index = 0; index < tenRandomArticlesData.length; index++) {
            const article = tenRandomArticlesData[index]
            const user = userData[index]

            const formatterArticle: ArticleType = {
                title: article.title,
                url: article.url,
                timestamp: article.time,
                score: article.score,
                authorId: user.id,
                authorKarma: user.karma
            }

            formatterArticlesData.push(formatterArticle)
        }
    } catch (e) {
        console.error(e)
    }

    return formatterArticlesData.sort(
        (article1, article2) => article1.score - article2.score
    )
}

export default getTenArticles
