import { useState } from 'react'
import { InputChat } from '../InputChat'
import './Form.css'

const Form = (props) => {


    const [menssagem, setMenssagem] = useState('')

    const EnviarMenssagem = (event) => {
        console.log(menssagem)
        event.preventDefault()
        props.setNovaMessagemEnviada({
            text: menssagem,
            user: "Pedro"
        })
      
    }
    return (
        <div className='input-area'>
            <form onSubmit={EnviarMenssagem} className='formulario'>
                <InputChat aoAlterado={valor => setMenssagem(valor)} />
                <button></button>
            </form >
        </div>


    )
}

export default Form