import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ArticleModel } from "../../models/ArticleModel";
import { baseUrl } from "../../utils/ApiUtil";


const ArticlesApiSlice = createApi({
    reducerPath: "AriclesApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints(builder) {
        return {
            fetchUserArticles: builder.query<ArticleModel[], { userId: string }>({
                query: (prams) => `/users/${prams.userId}/articles`
            }),
            fetchArticle: builder.query<ArticleModel, { userId: string, articleId: string }>({
                query: (prams) => `/users/${prams.userId}/articles/${prams.articleId}`
            })
        }
    }
})

export default ArticlesApiSlice
export const { useFetchUserArticlesQuery, useFetchArticleQuery } = ArticlesApiSlice