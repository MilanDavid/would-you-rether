import React, { Fragment, useEffect, useState } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import { Card, CardContent, Grid, Typography, Button, FormControlLabel, Radio, RadioGroup, CardHeader, Avatar, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';
import { handleAnswer } from '../actions/answer';
import { updateAuthedUser } from '../actions/shared';
import Results from './Results';


const Answer = ({ questions, users, authedUser, dispatch }) => {

    useEffect(() => {
        if(authedUser) {
            dispatch(updateAuthedUser(users[authedUser.id]));
        }
    }, [users, authedUser])

    const params = useParams();
    const [value, setValue] = useState(null);

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = () => {
        dispatch(handleAnswer(params?.questionId, authedUser.id, value));
    };

    return (
        <Grid container direction="column" alignItems="center" alignContent="center" >
            <Grid item>
                <Card style={{ minWidth: 400, marginTop: 20 }}>
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
                        title={`${users[params?.userId]?.name} asks:`}
                    ></CardHeader>
                    <CardContent>
                        <Grid container direction="row" spacing={4} alignItems="center">
                            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                                <Avatar style={{ width: 150, height: 150 }} src={users[params?.userId]?.avatarURL} alt={`Avatar of ${users[params?.userId]?.name}`} className="avatar" />
                            </Grid>
                            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                <Grid container direction="column" style={{ padding: 20 }}>
                                    {
                                        authedUser &&
                                            Object.keys(authedUser.answers).includes(params?.questionId) ?
                                            <Results question={questions[params?.questionId]} user={authedUser} /> :
                                            <Fragment>
                                                <Grid item>
                                                    <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>Would you rather...</Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Grid container direction="column">
                                                        <FormControl component="fieldset" variant="standard">
                                                            <RadioGroup name="answer" onChange={handleRadioChange}>
                                                                <FormControlLabel value="optionOne" control={<Radio style={{ color: '#1EA1A1' }} />} label={questions[params?.questionId]?.optionOne.text} />
                                                                <FormControlLabel value="optionTwo" control={<Radio style={{ color: '#1EA1A1' }} />} label={questions[params?.questionId]?.optionTwo.text} />
                                                            </RadioGroup>
                                                        </FormControl>
                                                        <Button variant="contained" fullWidth style={value ? { backgroundColor: '#1EA1A1', color: 'white' } : { backgroundColor: 'gray' }} disabled={!value} onClick={() => handleSubmit()}>Submit</Button>
                                                    </Grid>
                                                </Grid>
                                            </Fragment>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

const mapsStateToProps = ({ questions, users, authedUser }) => {
    return {
        questions,
        users,
        authedUser
    }
}

export default connect(mapsStateToProps)(withRouter(Answer));