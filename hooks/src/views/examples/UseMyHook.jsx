import React from "react";
import './UseMyHook.css'
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { UseFetch } from "../../hooks/UseFetch";

const UseMyHook = props => {
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = UseFetch(url)

    function showStates(states){
        return states.map(state => <li key={state.nome}>{state.nome} --- {state.sigla}</li>)
    }
    return (
        <div className="UseMyHook">
            <PageTitle title='Seu Hook' subtitle='Vamos aprender como criar o nosso proprio hook!'/>
            <SectionTitle title='Exercicio #01'/>
            <div className="center">
                <ul className="ulData">
                    {response.data ? showStates(response.data): false}
                </ul>
            </div>
        </div>
    )
}

export default UseMyHook