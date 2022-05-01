import { Alert, Avatar, Button, CircularProgress, Container, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleModel } from "../../models/ArticleModel";
import { useFetchUserArticlesQuery } from "../../store/Articles/reducer";
import { useFetchUserQuery } from "../../store/Users/reducer";

export function ArticlesPage() {
    return <Container>
        <ArticlesPageBody />
    </Container>
}
function ArticlesPageBody() {
    const { uid } = useParams()

    const { isError, data, isLoading, error, isSuccess, refetch } = useFetchUserArticlesQuery({ userId: String(uid) })
    const user = useFetchUserQuery(String(uid))

    const navigate = useNavigate()
    function onUserClicked(article: ArticleModel) {
        navigate(`/users/${article.userId}/article/${article.id}`)
    }
    if (isError || user.isError) {
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
        return <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={user.data?.avatar} />
                </ListItemAvatar>
                <ListItemText>{user.data?.name}</ListItemText>

            </ListItem>
            <Typography sx={{ flexGrow: 1, fontSize: "13px",marginLeft:"14px" }}>
                {user.data?.bio}
            </Typography>
           
            <hr/>
            {data.map((article, index) =>
                <ListItemButton key={index} onClick={() => onUserClicked(article)}>
                    <ListItem>
                        <ListItemText>{article.title}</ListItemText>
                    </ListItem>
                </ListItemButton>
            )}
        </List>
    }
    return null
}