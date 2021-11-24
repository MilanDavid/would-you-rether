import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';


const Ladder = ({ users }) => {

    console.log('[USERS]: ', users);

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
            {
                users && Object.keys(users).sort((first, second) => {
                    console.log('[FIRST]: ', users[first]);
                    console.log('[SECOND]: ', users[second]);
                    return (Object.keys(users[second].answers).length + users[second].questions.length) - (Object.keys(users[first].answers).length + users[first].questions.length)
                }).map((user, index) => (
                    <Grid item key={index}>
                        <Card style={{ minWidth: 400 }}>
                            <CardContent>
                                <Grid container direction="row" spacing={4} alignItems="center">
                                    <Grid item>
                                        <Avatar style={{ width: 150, height: 150 }} src={users[user].avatarURL} alt={`Avatar of ${users[user].name}`} className="avatar" />
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>{users[user].name}</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row" spacing={4} justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography>Answered questions</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography>{Object.keys(users[user].answers).length}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item>
                                                <hr />
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row" spacing={4} justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography>Created questions</Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography>{users[user].questions.length}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Card style={{ maxWidth: 400 }}>

                                            <CardHeader
                                                titleTypographyProps={{
                                                    style: {
                                                        fontSize: 18,
                                                        fontWeight: 'bold',
                                                        textAlign: 'center'
                                                    }
                                                }}
                                                style={{
                                                    backgroundColor: 'lightgray',
                                                }}
                                                title={`Score`}
                                            ></CardHeader>
                                            <CardContent>
                                                <div style={{ width: 30, height: 30, padding: 15, backgroundColor: '#1EA1A1', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <Typography style={{ fontWeight: 'bold', fontSize: 24 }}>{Object.keys(users[user].answers).length + users[user].questions.length}</Typography>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    )
}

const mapsStateToProps = ({ users, authedUser }) => {
    return {
        users,
        authedUser
    }
}

export default connect(mapsStateToProps)(withRouter(Ladder));