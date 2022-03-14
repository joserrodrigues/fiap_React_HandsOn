import React from 'react';
import { Grid, Typography, Stack, CircularProgress, Alert, Button } from '@mui/material';
import { Formik, Form, ErrorMessage } from "formik";
import './Add.css'
import CustomInput from '../../Components/CustomInput/CustomInput';
import InputMask from "react-input-mask";
import renderif from 'render-if';

const DetailView = ({ onBackButton,onSubmit, signInSchema, isLoading, connectCode, connectMessage }) => {


    let message = null;
    console.log(connectMessage);
    if (connectMessage !== "") {
        let severity = "success";
        if (connectCode !== 1) {
            severity = "error";
        }
        message = (
            <Alert severity={severity} variant="filled"> {connectMessage} </Alert>
        );
    }
    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                address: "",
                phone: "",
            }}
            validationSchema={signInSchema}
            onSubmit={onSubmit}>
            {(formik) => {
                const { values, setFieldValue, submitForm } = formik;
                return (
                    <Form>
                        <Grid container spacing={2} className='box'>
                            <Grid item xs={12} md={12}>
                                {message}
                                <Typography gutterBottom variant="h3" className="text">
                                    Adicionar novo Colaborador
                                </Typography>
                                <div>
                                    <CustomInput
                                        label="Nome"
                                        onChange={e => setFieldValue('firstName', e.target.value) }
                                    />
                                </div>
                                <div><ErrorMessage name="firstName" component="span" className="infoError" /></div>
                                <div>
                                    <CustomInput
                                        label="Sobrenome"
                                        onChange={e => setFieldValue('lastName', e.target.value)}
                                    />
                                </div>
                                <div><ErrorMessage name="lastName" component="span" className="infoError" /></div>
                                <div>
                                    <InputMask
                                        mask="(99) 99999-9999"
                                        disabled={false}
                                        value={values.phone}
                                        maskChar=" "
                                        onChange={e => {
                                            setFieldValue('phone', e.target.value)
                                        }}
                                    >
                                        <CustomInput label="Telefone" />
                                    </InputMask>
                                </div>
                                <div><ErrorMessage name="phone" component="span" className="infoError" /></div>
                                <div>
                                    <CustomInput
                                        label="Endereco"
                                        onChange={e => setFieldValue('address', e.target.value)}
                                    />
                                </div>
                                <div><ErrorMessage name="address" component="span" className="infoError" /></div>
                                <Stack direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={5}
                                    className='divButtons'>
                                    {renderif(isLoading)(
                                        <CircularProgress />
                                    )}
                                    {renderif(!isLoading && connectCode !== 1)(
                                        <>
                                            <Button variant='secondary' type="submit" onClick={submitForm}>Adicionar</Button>
                                            <Button variant='secondary' onClick={() => onBackButton()}>Voltar</Button>

                                        </>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                            </Grid>

                        </Grid>
                    </Form>
                );
            }}
        </Formik>

    );
};

export default DetailView;