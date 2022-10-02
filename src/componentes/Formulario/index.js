
import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'


const Formulario = (props) => {
    const tipos = [
        'Legend',
        'Great Boss',
        'Field Boss'
    ];
    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');
    const [tipo, setTipo] = useState('');
    const [regiao, setRegiao] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        
        props.aoChefeCadastrado({
            nome,
            imagem,
            tipo,
            regiao
        });    

        setNome('')
        setImagem('')
        setTipo('')
        setRegiao('')
    
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os campos para criar o card dos jogos</h2>
                <CampoTexto 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    obrigatorio={true} 
                    valor={nome} 
                    aoAlterado={valor => setNome(valor)} 
                />       
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"  
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    label="Tipo" 
                    items={tipos} 
                    obrigatorio={true} 
                    valor={tipo} 
                    aoAlterado={valor => setTipo(valor)} 
                />
                <ListaSuspensa 
                    label="Regiões" 
                    items={props.regioes} 
                    obrigatorio={true} 
                    valor={regiao} 
                    aoAlterado={valor => setRegiao(valor)} 
                />
                <Botao> 
                    Criar Cartão
                </Botao>
                

            </form>
        </section>
    )
}

export default Formulario