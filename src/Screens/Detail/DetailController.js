import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DetailView from './DetailView';

const DetailController = () => {

    const { infoID } = useParams();
    let navigate = useNavigate();

    const onBackButton = () => {
        navigate(-1);
    }

    return (
        <DetailView infoID={infoID} onBackButton={onBackButton} />
    );
};

export default DetailController;