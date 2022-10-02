import './Chefe.css'

const Chefe = (props) => {
    return (
        <div className='chefe'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4> {props.nome} </h4>
                <h3> {props.tipo} </h3>
            </div>
        </div>
    )
}

export default Chefe