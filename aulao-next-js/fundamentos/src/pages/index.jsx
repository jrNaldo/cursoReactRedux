import Navegador from "@/components/Navegador"
import Link from "next/link"

export default function Inicio(){
    return (
        <div>
            <h1>Home - React e Next.js</h1>
            <ul>
                <Navegador destino='/estiloso' name='Estiloso'/>
                <Navegador destino='/exemplo' name='Exemplo'/>
                <Navegador destino='/jsx' name='Jsx'/>
            </ul>
        </div>
    )
}