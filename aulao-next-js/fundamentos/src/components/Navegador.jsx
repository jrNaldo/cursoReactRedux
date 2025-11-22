import Link from "next/link"
import styles from '../styles/Navegador.module.css'

export default function Navegador(props){
    return (
        <div>
            <li>
                <Link href={props.destino}>{props.name}</Link>
            </li>
        </div>
    )
}