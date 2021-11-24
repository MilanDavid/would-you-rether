import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Avatar, Button, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';


const Question = ({ question, user }) => {

    if (question === null) {
        return <p>This Tweet doesn't exists</p>
    }

    const {
        id,
        name,
        avatarURL,
    } = user;

    return (
        <Card style={{ maxWidth: 400 }}>

            <CardHeader
                titleTypographyProps={{
                    style: {
                        fontSize: 18,
                        fontWeight: 'bold'
                    }
                }}
                style={{
                    backgroundColor: 'lightgray',
                }}
                title={`${name} asks:`}
            ></CardHeader>

            <CardContent>
                <Grid container direction="row" spacing={4} alignItems="center">
                    <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                        <Avatar style={{ width: '100%', height: '100%' }} src={avatarURL} alt={`Avatar of ${name}`} className="avatar" />
                    </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>
                                <Typography style={{ fontSize: 16, fontWeight: 'bold' }}>Would you rather</Typography>
                            </Grid>
                            <Grid item>
                                <Typography>...{question.optionOne.text}...</Typography>
                            </Grid>
                            <Grid item>
                                <Link to={`/questions/${id}/${question.id}`}>
                                    <Button variant="contained" fullWidth style={{ backgroundColor: '#1EA1A1', color: 'white' }}>View Poll</Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default withRouter(Question);