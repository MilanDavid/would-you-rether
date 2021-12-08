import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import { logoutUser } from '../actions/authedUser';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import Nav from './Nav';
import Login from './Login';
import Answer from './Answer';
import Ladder from './Ladder';
import NewQuestion from './NewQuestion';

const App = ({ authedUser, dispatch }) => {

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
  }

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        {(authedUser === null) && <Redirect to='/login' />}
        <Nav
          loggedInUser={authedUser}
          handleLogoutUser={handleLogoutUser}
        />
        <div className='container'>
          <div>
            <Route path='/' exact component={Dashboard} />
            <Route path='/add' component={NewQuestion} />
            <Route path='/login' component={Login} />
            <Route path='/questions/:userId/:questionId' component={Answer} />
            <Route path='/leaderboard' component={Ladder} />
          </div>
        </div>
      </Fragment>
    </Router>
  )
}

const mapsStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  }
}

export default connect(mapsStateToProps)(App);