import './Chat.css'

import Message from '../Message'

export const Chat = (props) => {

    return (
        <div className='chat' >
            {props.listaMenssagens.map(message => (<Message message = {message.text}></Message>))}
        </div>
    )
}