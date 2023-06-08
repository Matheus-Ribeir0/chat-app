import { useState } from 'react'
import { InputChat } from '../InputChat'
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
    return (
        <div className='input-area'>
            <form onSubmit={PrevinirRecarregamento} className='formulario'>
                <InputChat valor={menssagem} enviar={EnviarMenssagem} aoAlterado={valor => setMenssagem(valor)} />
                <button></button>
            </form >
        </div>


    )
}

export default Form