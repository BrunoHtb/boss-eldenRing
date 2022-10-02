import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Regioes from './componentes/Regioes';


function App() {

  const regioes = [
    {
      nome: 'Limgrave',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Caelid',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
    {
      nome: 'Altus Plateau',
      corPrimaria: '#FFFFC2',
      corSecundaria: '#CFB53B'
    },
    {
      nome: 'Liurnia Of The Lakes',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Weeping Peninsula',
      corPrimaria: '#F0F8E3',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Dragonbarrow',
      corPrimaria: '#FFEEDF',
      corSecundaria: '#FF8A29'
    },
    {
      nome: 'Mt. Gelmir',
      corPrimaria: '#FAE9F5',
      corSecundaria: '#DB6EBF'
    },
  ];

  const [chefes, setChefes] = useState([]);
  const aoNovoChefeAdicionado = (chefe) => {
    debugger
    setChefes([...chefes, chefe]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario  regioes={regioes.map(regiao => regiao.nome)} aoChefeCadastrado = {chefe => aoNovoChefeAdicionado(chefe)}/>
      
      {regioes.map(regiao => 
      <Regioes 
        key={regiao.nome} 
        nome={regiao.nome} 
        corPrimaria={regiao.corPrimaria} 
        corSecundaria={regiao.corSecundaria} 
        chefes={chefes.filter(chefe => chefe.regiao == regiao.nome)}
      /> )}

      


    </div>
  );
}

export default App;
