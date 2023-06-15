import './App.css'
import { Chat } from './components/Chat'
import { auth } from './firebaseConfig'
import { SignIn, SignOut } from './components/Autentincation/Autenticantion'
import { useAuthState } from 'react-firebase-hooks/auth'



function App() {
  const [user] = useAuthState(auth)
  const messages = []

  return (
    <div className='background'>
      <section>{user ? <Chat listaMenssagens={messages}/> : <SignIn/>}</section>
     <SignOut/>
    </div>
  )
}
export default App