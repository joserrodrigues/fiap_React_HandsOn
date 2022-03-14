import React from 'react';
import { Container, Stack, Button, Typography } from '@mui/material';
import './Detail.css'

const DetailView = ({ infoID, onBackButton, latitude, longitude, google }) => {

    return (
        <>
            <Stack spacing={2} className='box'>
                <Typography gutterBottom variant="h3" className="text">
                    Detail = {infoID}
                </Typography>
                <Button variant="primary" onClick={() => onBackButton()} className="btnDetail">Voltar</Button>
            </Stack>
        </>
    );
};


export default DetailView;