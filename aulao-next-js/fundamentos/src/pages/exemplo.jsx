import Cabecalho from "@/components/Cabecalho"
import Layout from "@/components/Layout"
import Link from "next/link"

export default function Exemplo(){
    return (
        <div>
            <Layout>
                    <Cabecalho
                    title='Next.js e React.jsx'
                    subtitle='Aprendendo propriedades com componentes' nome='xyz' 
                    idade={123}
                />
            </Layout>
        </div>
    )
}