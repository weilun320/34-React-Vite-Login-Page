import React, { useContext, useState } from 'react'
import AuthContext from '../AuthContext';

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isSignIn = useContext(AuthContext).isSignIn;
  const setSignIn = useContext(AuthContext).setSignIn;

  function signIn() {
    if (!isSignIn) {
      setSignIn(username === "user" && password === "12345678");
    }
  }

  if (isSignIn) {
    return null;
  }

  return (
    <>
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn}>Sign In</button>
      <p>Please sign in to view your profile.</p>
    </>
  );
}
