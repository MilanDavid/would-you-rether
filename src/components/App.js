import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';
import NewTweet from './NewTweet';
import TweetPage from './TweetPage';
import Nav from './Nav';
import Login from './Login';
import { logoutUser } from '../actions/authedUser';

const App = ({ authedUser, dispatch }) => {

  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  }

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        {authedUser === null && <Redirect to='/login' />}
        <div className='container'>
          <Nav
            loggedInUser={authedUser}
            handleLogoutUser={handleLogoutUser}
          />
          <div>
            <Route path='/' exact component={Dashboard} />
            <Route path='/tweet/:id' component={TweetPage} />
            <Route path='/new' component={NewTweet} />
            <Route path='/login' component={Login} />
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