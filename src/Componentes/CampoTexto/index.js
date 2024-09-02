import './CampoTexto.css'

const CampoTexto = (props) => {

    

    const aoDigitadado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label >{props.label}</label>
            <input value={props.valor} onChange={aoDigitadado} required={props.obrigatorio} placeholder={props.placeholder} />
        </div>
    )
}

export default CampoTexto