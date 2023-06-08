import './InputChat.css'

export const InputChat = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <textarea 
            placeholder='Message..' 
            onChange={aoDigitado} 
            rows={1}>
        </textarea>
    )
}