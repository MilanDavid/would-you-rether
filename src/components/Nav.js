import React from 'react';
import { Avatar, Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ loggedInUser, handleLogoutUser }) => {

    return (
        <nav className='nav'>
            <Grid container direction="row">
                <Grid item xs sm md lg xl>
                    <Grid container direction="row" style={{ height: 72 }} alignItems="center" spacing={4}>
                        <Grid item>
                            <NavLink to='/' exact activeClassName="active">
                                Home
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to='/new' exact activeClassName="active">
                                New Question
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to='/leaderboard' exact activeClassName="active">
                                Leader Board
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
                {loggedInUser ?
                    <Grid item xs sm md lg xl>
                        <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={4}>
                            <Grid item>
                                Hello, {loggedInUser.name}
                            </Grid>
                            <Grid item>
                                <Avatar src={loggedInUser.avatarURL} />
                            </Grid>
                            <Grid item>
                                <Button onClick={() => handleLogoutUser()}>
                                    Logout
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    :
                    <Grid item xs sm md lg xl>
                        <Grid container style={{ height: 72 }} direction="row" justifyContent="flex-end" alignItems="center" spacing={4}>
                            <Grid item>
                                <NavLink to="/login" activeClassName="active">
                                    Login
                                </NavLink>
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </Grid>
        </nav>
    )
}

export default connect()(Nav);