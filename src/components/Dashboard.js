import React, { useState } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';

const TabPanel = ({ children, value, index }) => {
    return (
        <div
            hidden={value !== index}
        >
            {children}
        </div>
    );
}

const Dashboard = ({ questions, users }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    console.log('[QUESTIONS]: ', questions);
    console.log('[USERS]: ', users);

    return (
        <div>
            <h3 className="center">Your Timeline</h3>

            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    <Tab label="Unanswered Questions" />
                    <Tab label="Answered Questions" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Typography>UNANSWERED</Typography>
                {
                    questions && Object.values(questions).map((question, index) => (
                        <li key={index}>
                            <Question question={question} user={users[question.author]} />
                        </li>
                    ))
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography>ANSWERED</Typography>
                {
                    questions && Object.values(questions).map((question, index) => (
                        <li key={index}>
                            <Question question={question} user={users[question.author]} />
                        </li>
                    ))
                }
            </TabPanel>
        </div>
    )
}

function mapsStateToProps({ questions, users }) {
    return {
        questions: questions,
        users: users
    }
}

export default connect(mapsStateToProps)(Dashboard);