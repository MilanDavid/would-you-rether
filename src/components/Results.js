import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, CardContent, Grid, Typography, LinearProgress } from '@material-ui/core';


const Results = ({ question, user }) => {
    console.log('[Q]: ', question);
    console.log('[USER]: ', user);
    console.log('[ONE]: ', ((question.optionOne.votes.length + question.optionTwo.votes.length)) * 100);
    console.log('[TWO]: ', ((question.optionOne.votes.length + question.optionTwo.votes.length) / question.optionTwo.votes.length) * 100 === Infinity);

    return (
        question &&
        <Grid container direction="column" alignContent="center" >
            <Grid item>
                <Typography style={{ fontSize: 24, fontWeight: 'bold' }}>Results:</Typography>
            </Grid>
            < Grid item>
                <Card style={{ minWidth: 400, marginTop: 20, backgroundColor: question.optionOne.votes.includes(user.id) ? 'rgb(30 161 161 / 21%)' : '#f3f3f3', border: question.optionOne.votes.includes(user.id) ? '2px solid #1EA1A1' : '2px solid gray', overflow: 'inherit', position: 'relative' }}>
                    {
                        question.optionOne.votes.includes(user.id) &&
                        <div style={{ position: 'absolute', right: -10, top: -20, backgroundColor: 'rgb(227 131 32)', borderRadius: '50%', padding: 10, fontWeight: 'bold', color: 'white', transform: 'rotate(15deg)' }}>
                            Your<br />Vote
                        </div>
                    }
                    <CardContent>
                        <Grid container direction="column" style={{ padding: 10 }} spacing={2}>
                            <Grid item>
                                <Typography style={{ fontSize: 18, fontWeight: 'bold', color: '#1EA1A1' }}>{question.optionOne.text}?</Typography>
                            </Grid>
                            <Grid item style={{ position: 'relative', overflow: 'inherit', padding: 0 }}>
                                <div style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography style={{ color: 'white', fontWeight: 'bold' }}>{(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100 === Infinity ? 0 : ((question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed(2)}%</Typography>
                                </div>
                                <LinearProgress variant="determinate" style={{ height: 50, borderRadius: 5 }} value={(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100 === Infinity ? 0 : (question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100} />
                            </Grid>
                            <Grid item>
                                <Typography style={{ textAlign: 'center', fontWeight: 'bold' }}>{question.optionOne.votes.length} out of {(question.optionOne.votes.length + question.optionTwo.votes.length)} votes</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            < Grid item>
                <Card style={{ minWidth: 400, marginTop: 20, backgroundColor: question.optionTwo.votes.includes(user.id) ? 'rgb(30 161 161 / 21%)' : '#f3f3f3', border: question.optionTwo.votes.includes(user.id) ? '2px solid #1EA1A1' : '2px solid gray', overflow: 'inherit', position: 'relative' }}>
                    {
                        question.optionTwo.votes.includes(user.id) &&
                        <div style={{ position: 'absolute', right: -10, top: -20, backgroundColor: 'rgb(227 131 32)', borderRadius: '50%', padding: 10, fontWeight: 'bold', color: 'white', transform: 'rotate(15deg)' }}>
                            Your<br />Vote
                        </div>
                    }
                    <CardContent>
                        <Grid container direction="column" style={{ padding: 10 }} spacing={2}>
                            <Grid item>
                                <Typography style={{ fontSize: 18, fontWeight: 'bold', color: '#1EA1A1' }}>{question.optionTwo.text}?</Typography>
                            </Grid>
                            <Grid item style={{ position: 'relative', overflow: 'inherit', padding: 0 }}>
                                <div style={{ position: 'absolute', zIndex: 1, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Typography style={{ color: 'white', fontWeight: 'bold' }}>{(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100 === Infinity ? 0 : ((question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100).toFixed(2)}%</Typography>
                                </div>
                                <LinearProgress variant="determinate" style={{ height: 50, borderRadius: 5 }} value={(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100 === Infinity ? 0 : (question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length)) * 100} />
                            </Grid>
                            <Grid item>
                                <Typography style={{ textAlign: 'center', fontWeight: 'bold' }}>{question.optionTwo.votes.length} out of {(question.optionOne.votes.length + question.optionTwo.votes.length)} votes</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid >
    )
}

export default withRouter(Results);