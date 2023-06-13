import { useState } from 'react'

import './Form.css'

const Form = (props) => {


    const [menssagem, setMenssagem] = useState('')

    const EnviarMenssagem = (event) => {
        const mensagemSemEspaços = menssagem.trim()
       if(mensagemSemEspaços !== '' && !/^\s+$/.test(mensagemSemEspaços)){
            props.setNovaMessagemEnviada({
                text: menssagem,
                user: "Pedro"
            })      
            setMenssagem('')
       }else{
        setMenssagem('')
       }
    }
    const PrevinirRecarregamento = (event) => {
        event.preventDefault()
        if(menssagem !== ' '){
            EnviarMenssagem(event)
        }
        
    }

    const handleChange = (evento) => {
        setMenssagem(evento.target.value)
    }

    const enviarComEnter = (evento) => {
        if (evento.keyCode === 13 && !evento.shiftKey) {
            if (evento.target.value !== ''){
                EnviarMenssagem(evento.target.value.trim())
            }
            
          }
    }
    return (
        <div className='input-area'>
            <form onSubmit={PrevinirRecarregamento} className='formulario'>
                <textarea 
                    placeholder='Message..' 
                    onChange={handleChange} 
                    onKeyUp={enviarComEnter}
                    value={menssagem}
                    rows={1}>
                </textarea>

                <button></button>
            </form >
        </div>


    )
}
//<InputChat valor={menssagem} enviar={EnviarMenssagem} aoAlterado={valor => setMenssagem(valor)} />
export default Form