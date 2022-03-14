import React from 'react';
import { Grid, Button, Typography } from '@mui/material';
import './Detail.css'

const DetailView = ({ info, onBackButton, latitude, longitude, google }) => {

    const infoJson = JSON.parse(info);
    return (
        <>
            <Grid container spacing={2} className='box'>
                <Grid item xs={12} md={12}>
                    <Typography gutterBottom variant="h1" className="text">
                        Detalhe do Colaborador
                    </Typography>
                    <p>
                        <img src={infoJson.image} />
                    </p>
                    <p>
                        <Typography gutterBottom variant="body" className="text">
                            Nome: {infoJson.firstName} {infoJson.lastName}
                        </Typography>
                    </p>
                    <p>
                        <Typography gutterBottom variant="body" className="text">
                            Nome: {infoJson.firstName} {infoJson.lastName}
                        </Typography>
                    </p>
                    <p>
                        <Typography gutterBottom variant="body" className="text">
                            Telefone: {infoJson.phone}
                        </Typography>
                    </p>
                    <p>
                        <Typography gutterBottom variant="body" className="text">
                            Endereço: {infoJson.address}
                        </Typography>
                    </p>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button variant="contained" onClick={() => onBackButton()}>Voltar</Button>
                </Grid>
            </Grid>
        </>
    );
};

export default DetailView;