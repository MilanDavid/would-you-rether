import React from 'react';
import { Avatar, Button, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export default function Nav({ user }) {
    console.log('[USER]: ', user);
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
                                New Tweet
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to='/leaderboard' exact activeClassName="active">
                                Leaderboard
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs sm md lg xl>
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center" spacing={4}>
                        <Grid item>
                            Name
                        </Grid>
                        <Grid item>
                            <Avatar src="" />
                        </Grid>
                        <Grid item>
                            <Button>
                                Logout
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </nav>
    )
}