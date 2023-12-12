import React, { useContext } from 'react'
import AuthContext from '../AuthContext';

export default function UserProfile() {
  const isSignIn = useContext(AuthContext).isSignIn;
  const setSignIn = useContext(AuthContext).setSignIn;

  function signOut() {
    if (isSignIn) {
      setSignIn(false);
    }
  }

  if (!isSignIn) {
    return null;
  }

  return (
    <>
      <h1>User Profile</h1>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <button onClick={signOut}>Sign Out</button>
    </>
  );
}
