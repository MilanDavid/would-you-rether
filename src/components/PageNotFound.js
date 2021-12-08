import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const PageNotFound = () => {

    return (
        <Grid container direction="column" alignItems='center' justifyContent="center" spacing={4}>
            <Grid item>
                <Typography>Page Not Found</Typography>
            </Grid>
            <Grid item>
                <Typography>Please go back</Typography>
            </Grid>
        </Grid>
    )
}

export default PageNotFound;