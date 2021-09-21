const Labels = {
    TIMESTAMP: 'Timestamp: ',
    SCORE: 'Score: ',
    AUTHOR_ID: 'Author ID: ',
    AUTHOD_KARMA: 'Author Karma: ',
    FULL_ARTICLE: 'Full article'
}

const apiRoutes = {
    getTopstories: 'topstories.json',
    getItem: (itemId: string): string => `item/${itemId}.json`,
    getUser: (userId: string): string => `user/${userId}.json`
}

const baseURL = 'https://hacker-news.firebaseio.com/v0/'

export { Labels, apiRoutes, baseURL }
