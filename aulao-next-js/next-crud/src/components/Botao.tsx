interface BotaoProps {
    cor: string
    className?: string
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'bg-green-400'
    return (
        <button  onClick={props.onClick} className={`
            ${cor}
            text-white px-4 py-2 rounded-md cursor-pointer
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}