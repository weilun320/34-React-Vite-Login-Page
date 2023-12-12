import { useState } from "react"
import AuthContext from "./AuthContext"
import SignInPage from "./components/SignInPage";
import UserProfile from "./components/UserProfile";

function App() {
  const [isSignIn, setSignIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isSignIn, setSignIn }}>
      <SignInPage />
      <UserProfile />
    </AuthContext.Provider>
  );
}

export default App
