import './Message.css'

const Message = (props) => {
    return (
        <div className='message'>
            <img src={props.image} alt={"usuário"}></img>
            <p>{props.message}</p>
        </div>
    )
}

export default Message