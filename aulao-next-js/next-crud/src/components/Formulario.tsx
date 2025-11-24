import { useState } from 'react'
import Cliente from '../core/Cliente'
import Entrada from './Entrada'
import Botao from './Botao'
interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    return (
        <div>
            <div>
                {id ? (
                    <Entrada texto='Código' valor={id} somenteLeitura className='mb-4' />
                ): false
                }
                <Entrada texto='Nome: ' valor={nome} valorMudou={setNome}className='mb-4'></Entrada>
                <Entrada texto='Idade: ' tipo='number' valor={idade} valorMudou={setIdade} className='mb-4'></Entrada>
            </div>
            <div className='flex justify-end mt-7'>
                <Botao 
                    cor='bg-gradient-to-r from-blue-400 to-blue-700' 
                    className='mr-2' 
                    onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
                >
                    {id ? ' Alterar' : 'Salvar'}
                </Botao>
                <Botao cor='bg-gradient-to-r from-gray-400 to-gray-700' onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}