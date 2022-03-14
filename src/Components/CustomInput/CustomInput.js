import { Typography } from '@mui/material';
import React from 'react';
import './CustomInput.css';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Sizes from '../../Utils/Common/Sizes';
import Colors from '../../Utils/Common/Colors';

const CustomInput = ({ label, errorMessage, defaultValue, placeholder, hasError }) => {

    let colorLabel = "";
    let hasErrorInfo = false;
    let borderNormal = '1px solid ' + Colors.NeutralMedium
    let borderFocused = '2px solid ' + Colors.SecondaryMedium
    if (hasError) {
        colorLabel = "error";
        hasErrorInfo = true;
        borderNormal = '1px solid ' + Colors.Error
        borderFocused = '2px solid ' + Colors.Error
    }

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
            marginTop: '18px',
        },
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
            border: borderNormal,
            fontSize: Sizes.FontSizeSM,
            width: 'auto',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
                'box-shadow',
            ]),
            '&:focus': {
                border: borderFocused,
            },
        },
    }));

    return (
        <div className='boxCustomInput'>
            <FormControl variant="standard">
                <InputLabel color="secondary" shrink htmlFor="bootstrap-input" error={hasError}>
                    {label}
                </InputLabel>
                <BootstrapInput
                    defaultValue={defaultValue}
                    error={hasError}
                    id="bootstrap-input"
                    size="small"
                    className="customInput"
                    placeholder={placeholder} />
                <Typography variant="minSize" color={colorLabel} className="labelMessageCustomInput">{errorMessage}</Typography>
            </FormControl>
        </div>
    );
};

export default CustomInput;