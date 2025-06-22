'use client'

export function PrimeiroComponent() {

    function hanleClick() {
        console.log('clique no botao');
    }

    return (
        <div>
            Meu Primeiro Componente!

            <button onClick={hanleClick}> clique aqui!</button>
        </div>
    )
}

export const ArrowFunction = ()  => {
    return(
        <h2>Arrow Function</h2>
    )
}