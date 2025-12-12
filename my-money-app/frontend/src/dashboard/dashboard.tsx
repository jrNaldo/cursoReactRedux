import React, { Component } from "react";
import Content from "../templates/Content";
import ContentHeader from "../templates/ContentHeader";
import '../css/Componente.css'

class Dashboard extends Component {
    render(): React.ReactNode {
        return (
            <div className="Componente">
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    Dashboard
                </Content>
            </div>
        )
    }
}

export default Dashboard