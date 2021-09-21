type ArticleType = {
    title: string
    url: string
    timestamp: number
    score: number
    authorId: string
    authorKarma: number
}

type ArticleDataType = {
    by: string
    descendants: number
    id: number
    kids: string[]
    score: number
    time: number
    title: string
    type: string
    url: string
}

type UserDataType = {
    created: number
    id: string
    karma: number
    submitted: number[]
}

export type { ArticleType, ArticleDataType, UserDataType }
