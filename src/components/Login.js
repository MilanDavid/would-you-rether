import { CardContent, Typography, Grid, Select, Card, CardHeader, MenuItem, Avatar } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

const Login = ({ users, dispatch, history }) => {

    const handleChange = (event) => {
        console.log('[SELECTED ID]: ', event.target.value);
        dispatch(setAuthedUser(users[event.target.value]));
        history.push('/');
    };

    console.log('[USERS]: ', Object.values(users));

    return (
        <Grid container justifyContent="center">
            <Card
                style={{
                    maxWidth: 400
                }}>
                <CardHeader>
                    <Typography variant="h4">Welcome to the Would You Rather App!</Typography>
                    <Typography variant="body1">Please sign in to continue</Typography>
                </CardHeader>
                <CardContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h5">Please sign in to continue</Typography>
                        </Grid>
                        <Grid item>
                        </Grid>
                        <Grid item>
                            <Select
                                defaultValue={0}
                                onChange={handleChange}
                                style={{
                                    width: '100%'
                                }}
                            >
                                <MenuItem disabled value={0} >Please select user</MenuItem>
                                {users && Object.values(users).map((user, index) => (
                                    <MenuItem key={index} value={user.id} >
                                        <Grid container direction="row" spacing={2} alignItems="center">
                                            <Grid item>
                                                <Avatar src={user.avatarURL} />
                                            </Grid>
                                            <Grid item>
                                                {user.name}
                                            </Grid>
                                        </Grid>
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

const mapsStateToProps = ({ users }) => {
    return {
        users
    }
}

export default connect(mapsStateToProps)(Login);