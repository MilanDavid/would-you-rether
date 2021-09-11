import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Avatar, Card, CardContent, CardHeader, Grid } from '@material-ui/core';


const Question = ({ question, user}) => {

    console.log('[QUESTION]: ', question);
    console.log('[USER]: ', user);

    if (question === null) {
        return <p>This Tweet doesn't exists</p>
    }

    const {
        id,
        name,
        avatarURL,
    } = user;

    console.log('[USER]: ', user);

    return (
        <>
            <Link to={`/question/${id}`}>
                <Card>
                    <CardHeader
                        title={`${name} asks:`}
                    />

                    <CardContent>
                        <Grid container direction="row">
                            <Grid item>
                                <Avatar src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
                            </Grid>
                            <Grid item>
                                <Grid container direction="column">
                                    <Grid item>

                                    </Grid>
                                    <Grid item>

                                    </Grid>
                                    <Grid item>

                                    </Grid>
                                </Grid>
                                <div className="tweet-info">
                                    <div>
                                        <span>{name}</span>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Link>
        </>
    )
}

export default withRouter(Question);