import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import { useEffect, useState } from "react";
import ClienteRepositorio from "../core/ClienteRepositorio";
import ColecaoCliente from "../backend/db/ColecaoCliente";

export default function Home() {

  const repo: ClienteRepositorio = new ColecaoCliente()
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
  const [clientes, setClientes] = useState<Cliente[]>([])
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  useEffect(obterTodos,[])
  
  
  function obterTodos() {
      repo.obterTodos().then(clientes => {
        setClientes(clientes)
        setVisivel('tabela')
      })

    }

    function clienteSelecionado(cliente: Cliente) {
      setCliente(cliente)
      setVisivel('form')
    }

    function clienteExcluido(cliente: Cliente) {
      console.log(cliente.nome)
    }

    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente)
      obterTodos()
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
