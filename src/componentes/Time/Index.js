import Colaborador from '../Colaborador/Index'
import './Time.css'

const Time = (props)=>{
    const css = {backgroundColor: props.cor2}
    return(
       props.colaboradores.length > 0 && <section className='time' style={css}>
       <h3 style={{borderColor:props.cor1}}>{props.nome}</h3>
       <div className='colaboradores'>
           {props.colaboradores.map(colaborador =><Colaborador 
           corDeFundo={props.cor1}
           key={colaborador.nome} 
           nome={colaborador.nome} 
           cargo={colaborador.cargo} 
           imagem={colaborador.imagem}
           
           />)}
       </div>
   </section>
        
    )
}

export default Time