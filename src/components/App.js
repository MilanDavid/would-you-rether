import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import PageNotFound from './PageNotFound';

const App = ({ authedUser, dispatch }) => {

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  const handleLogoutUser = () => {
    dispatch(logoutUser());
    localStorage.removeItem('user');
  }

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <Nav
          loggedInUser={authedUser}
          handleLogoutUser={handleLogoutUser}
        />
        <div className='container'>
          <div>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route path='/add' component={NewQuestion} />
              <Route path='/login' component={Login} />
              <Route path='/questions/:questionId' component={Answer} />
              <Route path='/leaderboard' component={Ladder} />
              <Route path="*" component={PageNotFound} />
            </Switch>
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