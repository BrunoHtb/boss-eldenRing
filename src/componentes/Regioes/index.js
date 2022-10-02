import Chefe from '../Chefe';
import './Regioes.css'

const Regioes = (props) => {
    const cssPrimaria = {backgroundColor: props.corPrimaria};
    const cssSecundaria = {borderBottomColor: props.corSecundaria};
    return (    
        (props.chefes.length > 0) ?  <section className='regioes' style={cssPrimaria}>
            <h3 style={cssSecundaria}>{props.nome}</h3>
            <div className='chefes'>
                {props.chefes.map(chefe => <Chefe corDeFundo={props.corSecundaria} key={chefe.nome} nome={chefe.nome} imagem={chefe.imagem} tipo={chefe.tipo} /> )}
           </div>
        </section>
        : ''
    )
}

export default Regioes