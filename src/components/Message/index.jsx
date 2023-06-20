import './Message.css'

const Message = (props) => {

    const messageGroups = [];
    if (props.messages) {
        // Agrupa as mensagens consecutivas do mesmo remetente
        for (let i = 0; i < props.messages.length; i++) {
            const currentMessage = props.messages[i];
            const previousMessage = props.messages[i - 1];

            if (previousMessage && previousMessage.uid === currentMessage.uid) {
                // Adiciona a mensagem atual ao grupo existente
                messageGroups[messageGroups.length - 1].push(currentMessage);
            } else {
                // Cria um novo grupo com a mensagem atual
                messageGroups.push([currentMessage]);
            }
        }
    }


    return (
        <div className="message">

            {messageGroups.map((messageGroup, index) => {
                const lastMessage = messageGroup[messageGroup.length - 1]              

                return (
                    <div className="message-group" key={messageGroup.uid}>
                        <div className='image-section'>
                            <img 
                                className='user-image' 
                                src={lastMessage.photoURL || 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'} 
                                alt={"usuário"}>
                            </img>
                        </div>
                        <div  key={messageGroup.uid}>
                            {messageGroup.map((msg, id) => {
                                return(
                                    <div key={id} >
                                        <p className='message-text'>{msg.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                        
                        
                        
                    </div>
                )
            })}
        </div>
    )

}
export default Message