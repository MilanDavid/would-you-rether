import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, Grid, TextField, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { getInitialData, saveQuestion } from '../utils/api';
import { receiveQuestions } from '../actions/tweets';
import { hideLoading, showLoading } from 'react-redux-loading';

const NewQuestion = ({ authedUser, dispatch }) => {

    const history = useHistory();
    const [questions, setQuestions] = useState({
        optionOne: '',
        optionTwo: ''
    })

    const handleChange = (e) => {
        setQuestions(prevState => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = () => {
        dispatch(showLoading());
        saveQuestion({
            author: authedUser.id,
            optionOneText: questions.optionOne,
            optionTwoText: questions.optionTwo
        })
            .then(res => {
                getInitialData()
                    .then(({ questions }) => {
                        dispatch(receiveQuestions(questions));
                        history.push('/')
                        dispatch(hideLoading());
                    })
                    .catch(err => {
                        dispatch(hideLoading());
                    })
            })
            .catch(err => {
                dispatch(hideLoading());
            })
    }

    if (authedUser === null) {
        return <Redirect to={{
            pathname: "/login",
            state: { from: history.location }
        }} />
    }

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item>
                <Card style={{ minWidth: 400 }}>

                    <CardHeader
                        titleTypographyProps={{
                            style: {
                                fontSize: 24,
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }
                        }}
                        style={{
                            borderBottom: '1px solid lightgray',
                        }}
                        title={`Create New Question`}
                    ></CardHeader>

                    <CardContent>
                        <Grid container direction="column" spacing={2} alignItems="center" justifyContent="center">
                            <Grid item style={{ width: '100%' }}>
                                <Typography style={{ fontSize: 16 }}>Complete the question:</Typography>
                            </Grid>
                            <Grid item style={{ width: '100%' }}>
                                <Typography style={{ fontSize: 22, fontWeight: 'bold' }}>Would you rather...</Typography>
                            </Grid>
                            <Grid item style={{ width: '100%' }}>
                                <TextField fullWidth variant="outlined" type="text" name="optionOne" placeholder="Enter Option One Text Here" onChange={handleChange} />
                            </Grid>
                            <Grid item style={{ width: '100%' }}>
                                <Typography style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>OR</Typography>
                            </Grid>
                            <Grid item style={{ width: '100%' }}>
                                <TextField fullWidth variant="outlined" type="text" name="optionTwo" placeholder="Enter Option One Text Here" onChange={handleChange} />
                            </Grid>
                            <Grid item style={{ width: '100%' }}>
                                <Button variant="contained" fullWidth style={{ backgroundColor: '#1EA1A1', color: 'white' }} onClick={handleSubmit}>Submit</Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>

    )
}

const mapsStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

export default connect(mapsStateToProps)(NewQuestion);