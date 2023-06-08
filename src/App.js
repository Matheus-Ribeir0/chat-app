import { useState } from 'react'
import './App.css'
import { Chat } from './components/Chat'
import Form from './components/Form'


function App() {

  const [messages, setMessages] = useState([])

  const setNovaMessagemEnviada = (menssagem) => {
    setMessages([...messages, menssagem])
    console.log(messages)
  }

  return (
    <div className='background'>
      <Chat listaMenssagens={messages}/>
      <Form setNovaMessagemEnviada={menssagem => setNovaMessagemEnviada(menssagem)}/>
    </div>
  )
}
export default App