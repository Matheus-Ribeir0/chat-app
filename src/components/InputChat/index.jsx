import './InputChat.css'

export const InputChat = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    const enviarComEnter = (evento) => {
        if (evento.keyCode === 13 && !evento.shiftKey) {
            console.log(evento)
            if (evento.target.value !== ''){
                props.enviar(evento.target.value.trim())
            }
            
          }
    }

    return (
        <textarea 
            placeholder='Message..' 
            onChange={aoDigitado} 
            onKeyUp={enviarComEnter}
            value={props.valor}
            rows={1}>
        </textarea>
    )
}