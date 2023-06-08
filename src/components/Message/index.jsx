import './Message.css'

const Message = (props) => {
    return (
        <div className='message'>
            <p>{props.message}</p>
        </div>
    )
}

export default Message