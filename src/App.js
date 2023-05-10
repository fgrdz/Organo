import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Time from './componentes/Time/Index';
import Formulario from './componentes/Formulario/Index.js';
import Rodape from './componentes/Rodape/Index';





function App() {

const [times,setTimes] = useState([
    {
      nome: 'Programação',
      cor:'#57c278',
      
    },
    {
      nome: 'Front-End',
      cor:'#82cffa',
      
    },
    {
      nome: 'Data Science',
      cor:'#A6D157',
      
    },
    {
      nome:  'Devops',
      cor:'#E06B69',
      
    },
    {
      nome:'UX e Design' ,
      cor:'#D86EBF',
      
    },
    {
      nome: 'Mobile',
      cor:'#FEBA05',
      
    },
    {
      nome: 'Inovação e Gestão',
      cor:'#FF8A29',
      
    }
])
const inicial = [
  {
    nome: 'Julio Figueiredo',
    cargo: 'Front-end developer jr',
    imagem: 'https://github.com/fgrdz.png',
    time: times[1].nome
  },
  {
    nome: 'Gustavo Lira',
    cargo: 'Gerente de projetos',
    imagem: 'https://github.com/GustavoLSantos.png',
    time: times[6].nome
  }
]


const [colaboradores, setColaboradores] = useState(inicial)

function deletarColaborador(){

}

function mudarCorDoTime (cor, nome ){
  setTimes(times.map(time=>{
    if(time.nome=== nome){
      time.cor = cor;
    }
    return time;
  }))
}


  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time=>time.nome)}aoColaboradorCadastrado =  {colaborador=> setColaboradores([...colaboradores, colaborador])}/>

      <section className='times'>
        <h1>Minha Organização</h1>
        {times.map((time,indice) =><Time 
          mudarCor= {mudarCorDoTime}
          key={indice} 
          time={time}
          aoDeletar = {deletarColaborador}
          colaboradores={colaboradores.filter(colaborador=> colaborador.time === time.nome)} 
        />)}
      </section>

      <Rodape/>


    </div>
  );
}

export default App;
