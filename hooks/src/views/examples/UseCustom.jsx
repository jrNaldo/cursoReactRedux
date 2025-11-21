import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { UseCounter } from "../../hooks/UseCustom";

const UseCustom = props => {
    const [count, inc, dec] = UseCounter(0)
    // http://files.cod3r.com.br/curso-react/estados.json
    return (
        <div className="UseCustom">
            <PageTitle
                title='Hook UseCustom' 
                subtitle='Vamos aprender como criar nosso próprio Hook'
            />
            <SectionTitle
                title='Exercicio #01'
            />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn" onClick={() => dec() }>-1</button>
                    <button className="btn" onClick={() => inc() }>+1</button>
                </div>
            </div>
        </div>
    )
}

export default UseCustom