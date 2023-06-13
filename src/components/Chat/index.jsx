import './Chat.css'

import Message from '../Message'
import { collection, limit, orderBy, query } from 'firebase/firestore'
import { databaseApp } from '../../firebaseConfig'
import {useCollectionData} from "react-firebase-hooks/firestore"


export const Chat = (props) => {

    const messageRef = collection(databaseApp, "messages")
    const QueryMessages = query(messageRef, orderBy("createdAt"),limit(25))//faz uma querry para organizar as menssagens por ordem de envio
    const [messages] = useCollectionData(QueryMessages, {idField: "id"})

    return (
        <div className='chat'>
            {messages && messages.map((msg, index)=> (<Message key={index} message={msg}></Message>))}
            
        </div>
    )
}

//older {props.listaMenssagens && props.listaMenssagens.map(message => (<Message message={message.text}></Message>))}