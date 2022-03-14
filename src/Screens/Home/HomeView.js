import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import './Home.css'
import { Link } from 'react-router-dom';

export default function HomeView({ info, person }) {

    let name = "";
    if (person) {
        name = person.persons[0].firstName + " " + person.persons[0].lastName
    }
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Typography gutterBottom variant="h1" className="text">
                Person {name}
            </Typography>
            <Typography gutterBottom variant="h1" className="text">
                Info {info}
            </Typography>

            <Link to="detail/1">Detail 1</Link>
            <Link to="detail/2">Detail 2</Link>

        </Grid>
    );
}