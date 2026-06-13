import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

const UserItem = ({ user, deleteUser }) => {
    return (
        <Card elevation={1} sx={{ width: '200px' }}>
            <CardMedia sx={{ width: '200px', height: '200px' }} image={user.avatar} />
            <CardContent>
                <Typography sx={{ color: 'black', fontSize: '20px' }}>{user.name}</Typography>
                <Typography sx={{ color: 'black', fontSize: '20px' }}>{user.age}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="warning">Update</Button>
                <Button onClick={() => deleteUser(user.id)} variant="outlined" color="error">Delete</Button>
            </CardActions>
        </Card>
    );
}

export default UserItem;
