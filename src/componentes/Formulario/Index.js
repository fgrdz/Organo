import { useState } from 'react';
import Botao from '../Botao/Index';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa/Index';
import './Formulario.css'




const Formulario = (props)=>{

    
    const[nome, setNome] = useState('')
    const[cargo, setCargo] = useState('')
    const[imagem, setImagem] = useState('')
    const[time, setTime] = useState('')
    
    

  
    
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
            
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    return(
        <section className="Formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar os dados do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor = {nome}aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" valor = {cargo}aoAlterado={valor =>setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o link do seu perfil github com .png no final" valor = {imagem} aoAlterado={valor => setImagem(valor)}/>
                

                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    itens={props.times} 
                    valor = {time} 
                    aoAlterado={valor=> setTime(valor)}/>
                <Botao>
                    Criar card 
                </Botao>

            </form>
        </section>
    )

}
export default Formulario;