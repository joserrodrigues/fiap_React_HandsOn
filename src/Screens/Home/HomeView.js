import { Typography, Box, Button } from '@mui/material';
import './Home.css'

const HomeView = (props) => {

    //Utilizando o props info que recebemos na inicialização do componente
    return (
        <Box className="mainContainer">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Typography variant='h1'>
                Button Clicked = {props.info} - 2
            </Typography>
            <Button onClick={() => props.onClicked('Button Clicked')} variant='primary'>Press Me</Button>{' '}

        </Box>
    )
}

export default HomeView;