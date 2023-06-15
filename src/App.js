import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import Form from './components/Form'
import { auth } from './firebaseConfig'
import { SignIn, SignOut } from './components/Autentincation/Autenticantion'
import { useAuthState } from 'react-firebase-hooks/auth'



function App() {
  const [user] = useAuthState(auth)
  const [messages, setMessages] = useState([])

  const sendMessage = (menssagem) => {
    setMessages([...messages, menssagem])
    console.log(messages)
  }

  return (
    <div className='background'>
      <section>{user ? <Chat listaMenssagens={messages}/> : <SignIn/>}</section>
      
      <Form sendMessage={menssagem => sendMessage(menssagem)}/>
     <SignOut/>
    </div>
  )
}
export default App