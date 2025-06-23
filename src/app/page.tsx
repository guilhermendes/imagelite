import { PrimeiroComponent, ArrowFunction } from '../components/PrimeiroComponent'
export default function Home() {
  return (
    <>
      <PrimeiroComponent 
          mensagem='mensagem component' 
          mensagemDoBotao='clicou aqui ' />

      <PrimeiroComponent 
          mensagem='novo component' 
          mensagemDoBotao='clicou aqui tambem' />
      <ArrowFunction />
    </>
  )
}

