import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import AddView from './AddView';
import * as Yup from "yup";
import "yup-phone";

const AddController = () => {

    const [connectMessage, setConnectMessage] = useState("");
    const [connectCode, setConnectCode] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    let navigate = useNavigate();

    const onBackButton = () => {
        navigate(-1);
    }

    const onSubmit = (values) => {
        // navigate(-1);
        console.log(values);

        setIsLoading(true);
        
    }
    const signInSchema = Yup.object().shape({
        firstName: Yup.string().required("O nome é obrigatório"),
        lastName: Yup.string().required("O sobrenome é obrigatório"),
        phone: Yup.string()
            .phone("BR", true, 'O telefone está inválido')
            .required("Telefone é obrigatório"),

        address: Yup.string()
            .required("Endereço é obrigatório")
            .min(10, "Endereço é muito curto"),
    });


    return (
        <AddView
            onBackButton={onBackButton}
            onSubmit={onSubmit}
            signInSchema={signInSchema}
            isLoading={isLoading}
            connectMessage={connectMessage}
            connectCode={connectCode}
        />
    );
};

export default AddController;