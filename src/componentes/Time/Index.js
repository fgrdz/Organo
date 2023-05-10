import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador/Index'
import './Time.css'

const Time = ({time, colaboradores, aoDeletar, mudarCor})=>{
   
    return(
      colaboradores.length > 0 && <>
       
       <section className='time' style={{backgroundColor: hexToRgba(time.cor, '0.5')}}>
       <input onChange={evento => mudarCor(evento.target.value, time.nome)} value={time.cor} type='color' className='input-cor' />
        
       <h3 style={{borderColor:time.cor}}>{time.nome}</h3>
       <div className='colaboradores'>
            
           {colaboradores.map((colaborador,indice) =><Colaborador 
           key={indice} 
           colaborador={colaborador} 
           corDeFundo={time.cor} 
           aoDeletar={aoDeletar} /> 
        
           )}
       </div>
   </section>
   </>    
    )
}

export default Time