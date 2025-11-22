export default function Cabecalho(props){
    // Props é somente leitura
    return (
        <header>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <p>{props.nome} --- {props.idade}</p>
        </header>
    )
}