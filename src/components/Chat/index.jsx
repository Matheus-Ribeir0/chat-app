import './Chat.css'

import Message from '../Message'

export const Chat = (props) => {

    return (
        <div className='chat'>
            {props.listaMenssagens.map(message => (<Message key={message.text} message = {message.text}></Message>))}
        </div>
    )
}