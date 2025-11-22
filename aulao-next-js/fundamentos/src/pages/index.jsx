import Navegador from "@/components/Navegador"
import Link from "next/link"

export default function Inicio(){
    return (
        <div style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador destino='/estiloso' name='Estiloso'/>
            <Navegador destino='/exemplo' name='Exemplo'/>
            <Navegador destino='/jsx' name='Jsx'/>
            <Navegador destino='/navegacao' name='Navegação 1'/>
            <Navegador destino='/cliente/mg-2/123' name='Navegação 2'/>
            <Navegador destino='/estado' name='Componente com estado'/>
            <Navegador destino='/integracao' name='Integracao com API'/>
        </div>
    )
}