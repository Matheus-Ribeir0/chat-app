import './Chat.css'

import Message from '../Message'
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { auth, databaseApp } from '../../firebaseConfig'
import {useCollectionData} from "react-firebase-hooks/firestore"
import Form from '../Form'


export const Chat = (props) => {

    const messageRef = collection(databaseApp, "messages")
    const QueryMessages = query(messageRef, orderBy("createdAt"),limit(25))//faz uma querry para organizar as menssagens por ordem de envio
    const [messages] = useCollectionData(QueryMessages, {idField: "id"})

    const sendMessage = async (menssagem)  => {
        const { uid } = auth.currentUser
        console.log(uid, menssagem)
        debugger
        await addDoc(messageRef , {
            text: menssagem,
            uid,
            createdAt: serverTimestamp()
        })
    }

    return (
        <div className='chat'>
            {messages.map(msg=> (<Message key={msg} message={msg}></Message>))}
            <Form sendMessage={menssagem => sendMessage(menssagem)}/>
        </div>
    )
}

//older {props.listaMenssagens && props.listaMenssagens.map(message => (<Message message={message.text}></Message>))}