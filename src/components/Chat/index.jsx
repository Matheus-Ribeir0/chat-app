import './Chat.css'

import Form from '../Form'
import Message from '../Message'

import { addDoc, collection, limit, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { auth, databaseApp } from '../../firebaseConfig'
import {useCollectionData} from "react-firebase-hooks/firestore"
import { useRef } from 'react'



export const Chat = (props) => {

    const dummy = useRef()
    const messageRef = collection(databaseApp, "messages")
    const QueryMessages = query(messageRef, orderBy("createdAt", "asc"),limit(25))

    
//faz uma querry para organizar as menssagens por ordem de envio
    const [messages] = useCollectionData(QueryMessages, {idField: "id"})

    const sendMessage = async (menssagem)  => {
        const { photoURL, uid } = auth.currentUser
        await addDoc(messageRef , {
            text: menssagem,
            uid,
            photoURL,
            createdAt: serverTimestamp()
        })

        dummy.current.scrollIntoView({behavior : "smooth"})
    }
 
    return (
        <>
        <div className='chat'>
            <Message messages={messages} ></Message>
            <div ref={dummy}></div>
        </div>
        <Form sendMessage={menssagem => sendMessage(menssagem)}/>
        </>
    )
}
//{messages && messages.map((msg, id) => (<Message key={id} message={msg.text} image={msg.photoURL}></Message>))}