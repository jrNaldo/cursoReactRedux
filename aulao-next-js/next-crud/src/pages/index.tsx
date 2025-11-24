import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import { useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

    const clientes = [
      new Cliente('Ana', 23, '1'),
      new Cliente('Pedro', 83, '2'),
      new Cliente('Alice', 34, '3'),
      new Cliente('Otavio', 23, '4'),
    ]

    function clienteSelecionado(cliente: Cliente) {
      setCliente(cliente)
      setVisivel('form')
    }

    function clienteExcluido(cliente: Cliente) {
      console.log(cliente.nome)
    }

    function salvarCliente(cliente: Cliente){
      console.log(cliente)
      setVisivel('tabela')
    }

    function novoCliente(cliente: Cliente){
      setCliente(Cliente.vazio())
      setVisivel('form')
    }


    return (
      <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-600
        text-white
      `}>
        <Layout titulo="Cadastro Simples">
          {visivel === 'tabela'
          ? (

            <>
              <div className="flex justify-end">
                <Botao 
                  className="mb-4" cor='bg-gradient-to-r from-green-400 to-green-700'
                  onClick={novoCliente}
                >Novo Cliente</Botao>
              </div>
              <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
            </>

          ) : 
            <Formulario 
              cliente={cliente}
              cancelado={() => setVisivel('tabela')}
              clienteMudou={salvarCliente}
            ></Formulario>
          }
        </Layout>
      </div>
    );
}
