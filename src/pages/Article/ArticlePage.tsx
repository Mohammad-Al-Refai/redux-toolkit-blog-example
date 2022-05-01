import { Alert, Button, CircularProgress, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetchArticleQuery } from "../../store/Articles/reducer";


export function ArticlePage() {
    return <Container>
        <ArticlePageBody />
    </Container>
}
function ArticlePageBody() {
    const { uid, articleId } = useParams()
    const { isError, data, isLoading, error, isSuccess, refetch } = useFetchArticleQuery({ userId: String(uid), articleId: String(articleId) })

    if (isError) {
        return <div className="d-flex flex-column align-items-center justify-content-center w-100 m-3">
            <Alert color="error">{(error as any).status == "404" ? "Not Found" : (error as any).error}</Alert>
            <Button onClick={() => refetch()}>refetch</Button>
        </div>
    }
    if (isLoading) {
        return <div className="d-flex align-items-center justify-content-center w-100 m-3">
            <CircularProgress />
        </div>
    }
    if (isSuccess) {
        return <div className="mt-3">
            <h2>{data.title}</h2>
            <p>{new Date(data.createdAt).toUTCString()}</p>
            <hr />
            <p>{data.content}</p>
        </div>
    }
    return null
}