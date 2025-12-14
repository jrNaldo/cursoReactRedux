import React, { Component } from "react";
import {connect} from "react-redux";

import Content from "../templates/Content";
import ContentHeader from "../templates/ContentHeader";
import '../css/Componente.css'
import ValueBox from "../widget/ValueBox";
import Row from "../layout/Row";

class Dashboard extends Component {
    render(): React.ReactNode {
        return (
            <div className="Componente">
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Row>
                    <Content>
                        <ValueBox cor="green" value={'R$10'} text="Total de Créditos" />
                        <ValueBox cor="blue" value={'R$10'} text="Total de Debitos"/>
                        <ValueBox value={'R$0'} text="Valor Consolidado"/>
                    </Content>
                </Row>
            </div>
        )
    }
}

export default Dashboard
// export default Dashboard