'use client'

interface PrimeiroComponentProps{
    mensagem?: string;
    mensagemDoBotao?: string;
}

export const PrimeiroComponent: React.FC<PrimeiroComponentProps> = (props: PrimeiroComponentProps) => {

    function hanleClick() {
        console.log(props.mensagemDoBotao);
    }

    return (
        <div>
            { props.mensagem }
            <button onClick={hanleClick}> clique aqui!</button>
        </div>
    )
}

export const ArrowFunction = ()  => {
    return(
        <h2>Arrow Function</h2>
    )
}