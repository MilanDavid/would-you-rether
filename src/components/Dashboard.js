import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs, Grid } from '@material-ui/core';
import Question from './Question';

const TabPanel = ({ children, value, index }) => {
    return (
        <div
            hidden={value !== index}
        >
            {children}
        </div>
    );
}

const Dashboard = ({ questions, users, authedUser }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container direction="column" alignItems="center" alignContent="center" >
            <Grid item>
                <h3>Your Timeline</h3>
            </Grid>
            <Grid item>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: '#1EA1A1'
                        }
                    }}
                >
                    <Tab label="Unanswered Questions" />
                    <Tab label="Answered Questions" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Grid container direction="column" spacing={4}>
                        {
                            questions && authedUser && Object.values(questions).map((question, index) => {
                                if (!question.optionOne.votes.includes(authedUser.id) && !question.optionTwo.votes.includes(authedUser.id)) {
                                    return <Grid item key={index}>
                                        <Question question={question} user={users[question.author]} />
                                    </Grid>
                                } else {
                                    return null;
                                }
                            })
                        }
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container direction="column" spacing={4}>
                        {
                            questions && authedUser && Object.values(questions).map((question, index) => {
                                if (question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id)) {
                                    return <Grid item key={index}>
                                        <Question question={question} user={users[question.author]} />
                                    </Grid>
                                } else {
                                    return null;
                                }
                            })
                        }
                    </Grid>
                </TabPanel>
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

export default connect(mapsStateToProps)(Dashboard);