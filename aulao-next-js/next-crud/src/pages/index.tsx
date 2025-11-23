import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

    const clientes = [
      new Cliente('Ana', 23, '1'),
      new Cliente('Pedro', 83, '2'),
      new Cliente('Alice', 34, '3'),
      new Cliente('Otavio', 23, '4'),
    ]

    function clienteSelecionado(cliente: Cliente) {
      console.log(cliente.nome)
    }

    function clienteExcluido(cliente: Cliente) {
      console.log(cliente.nome)
    }

    return (
      <div className={`
        flex justify-center items-center h-screen
        bg-gradient-to-r from-blue-500 to-purple-600
        text-white
      `}>
        <Layout titulo="Cadastro Simples">
          <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
        </Layout>
      </div>
    );
}
