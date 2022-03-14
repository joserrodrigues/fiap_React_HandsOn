//Importar o useState no componente
import { useState, useEffect } from 'react';
import HomeView from './HomeView';

const HomeController = () => {

    //Declarando o state information
    const [information, setInformation] = useState(0);

    //Esse useEffect é invocado sempre que há uma renderização do componente
    useEffect(() => {
        console.log("Executa na renderização do componente");
        return () => {
            console.log("Executa antes de realizar a renderização");
        }
    });

    //Esse useEffect é invocado sempre que o componente é montado
    useEffect(() => {
        console.log("Executa na montagem do componente");
        return () => {
            //Aqui ele é executado na desmontagem do componente
            console.log("Executa na desmontagem do componente");
        };
    }, []);

    //Esse useEffect é invocado sempre que o valor do count é alterado
    useEffect(() => {
        console.log("Executa na alteração do information");
        return () => {
            console.log("Executa antes de executar o render ao alterar o valor do information");
        }
    }, [information]);

    //função chamada no View
    const onClicked = () => {
        //Alterando a informação do useState
        console.log(information)
        setInformation(information + 1);
    }

    //Passando a variavel information como o props info e a função onClicked
    return <HomeView
        info={information}
        onClicked={onClicked}
    />;
}

export default HomeController;