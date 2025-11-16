import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = props => {
    return (
        <div className="useRef">
            <PageTitle
                title='Hook UseRef'
                subtitle='Retorna um objeto mutável com a propriedade .current!'
            />
        </div>
    )
}

export default UseRef