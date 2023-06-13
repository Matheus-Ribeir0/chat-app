import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../firebaseConfig";

export const SignIn = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    return (
        <button className="sign-in" onClick={() => signInWithGoogle()}>Logar com Google</button>
    )
}


export const SignOut = () => {
    return (
      auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sair
        </button>
      )
    );
  };