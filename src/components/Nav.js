import React from 'react';
import { Avatar, Button, Container, Grid, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    active: {
        fontWeight: 'bold',
        color: '#1EA1A1'
    },
    navItem: {
        '&:hover': {
            fontWeight: 'bold'
        }
    }
});

const Nav = ({ loggedInUser, handleLogoutUser }) => {

    const classes = useStyles();

    return (
        <nav className='nav' style={{ borderBottom: '2px solid green', padding: 10 }}>
            <Container>
                <Grid container direction="row">
                    <Grid item xs sm md lg xl>
                        <Grid container direction="row" style={{ height: 72 }} alignItems="center" spacing={4}>
                            <Grid item>
                                <NavLink to='/' exact className={isActive => isActive ? classes.active : classes.navItem}>
                                    Home
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to='/add' exact className={isActive => isActive ? classes.active : classes.navItem}>
                                    New Question
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to='/leaderboard' exact className={isActive => isActive ? classes.active : classes.navItem}>
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
                                    <NavLink to="/login">
                                        Login
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Container>
        </nav>
    )
}

export default connect()(Nav);