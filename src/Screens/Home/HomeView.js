import * as React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import MaterialTable from 'material-table';
import Colors from '../../Utils/Common/Colors'

import './Home.css'

export default function HomeView({ loading, onChangePage, getDataPage, onAddPage }) {

    let name = "";

    const columns = [
        { title: 'SobreNome', field: 'lastName', },
        { title: 'Nome', field: 'firstName' },
        { title: 'Telefone', field: 'phone' }
    ];

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Typography xs={12} gutterBottom variant="h3" className="text">
                Lista de Colaboradores
            </Typography>
            <Grid item xs={12} className='divTopButton'>
                <Button variant="primary" onClick={onAddPage}>Adicionar Colaborador</Button>
            </Grid>    
            <MaterialTable
                xs={12}
                title="Remote Data Preview"
                columns={columns}
                data={getDataPage}
                isLoading={loading}
                actions={[
                    {
                        icon: 'visibility',
                        tooltip: 'See Detail',
                        onClick: (event, rowData) => {
                            onChangePage(rowData)
                        }
                    }
                ]}
                options={{
                    showTitle: false,
                    search: true,
                    actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#eee',
                        color: Colors.PrimaryDark,
                    },
                    rowStyle: {
                        color: Colors.PrimaryDark
                    },
                    searchFieldStyle: {
                        color: Colors.PrimaryDark,
                        borderBottom: '2px solid #333',
                    }
                }}

            />
        </Grid>
    );
}