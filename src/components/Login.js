import React, { useEffect } from 'react';
import { CardContent, Typography, Grid, Select, Card, CardHeader, MenuItem, Avatar } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import { handleInitialData } from '../actions/shared';

const Login = ({ users, dispatch, history, authedUser }) => {

    useEffect(() => {
        dispatch(handleInitialData());
    }, []);

    if (authedUser !== null) {
        return <Redirect to='/' />
    }

    const handleChange = (event) => {
        dispatch(setAuthedUser(users[event.target.value]));
        localStorage.setItem('user', JSON.stringify(users[event.target.value]));
        history.push('/');
    };

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

const mapsStateToProps = ({ users, authedUser }) => {
    return {
        users,
        authedUser
    }
}

export default connect(mapsStateToProps)(Login);