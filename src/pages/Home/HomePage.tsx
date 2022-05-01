import { Container, Alert, CircularProgress, List, ListItem, Avatar, ListItemAvatar, ListItemText, ListItemButton, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../../models/UserModel";
import { useFetchUsersQuery } from "../../store/Users/reducer";

export function HomePage() {

    return <Container >
        <HomePageBody />
    </Container>
}

function HomePageBody() {
    const { isError, data, isLoading, error, isSuccess,refetch } = useFetchUsersQuery()
    const navigate = useNavigate()
    function onUserClicked(user: UserModel) {
        navigate(`/users/${user.id}/articles`)
    }
    if (isError) {
        return <div className="d-flex flex-column align-items-center justify-content-center w-100 m-3">
            <Alert color="error">{(error as any).error}</Alert>
            <Button onClick={() => {
                refetch()
            }}>refetch</Button>
        </div>
    }
    if (isLoading) {
        return <div className="d-flex align-items-center justify-content-center w-100 m-3">
            <CircularProgress />
        </div>
    }
    if (isSuccess) {
        return <List>
            <h3>Users</h3>
            <hr/>
            {data.map((user, index) =>
                <ListItemButton key={index} onClick={() => onUserClicked(user)}>
                    <ListItem>
                        <ListItemAvatar><Avatar src={user.avatar} /></ListItemAvatar>
                        <ListItemText>{user.name}</ListItemText>
                    </ListItem>
                </ListItemButton>
            )}
        </List>
    }
    return null
}