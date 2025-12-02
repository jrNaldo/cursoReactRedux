import React from 'react'
import Card from './Card'

export default props => {
    return (
        <Card title='Media' green>
            <div>
                <span>
                    <strong>Resultado</strong>
                    <input type="number" value={0} readOnly/>
                </span>
            </div>
        </Card>
    )
}