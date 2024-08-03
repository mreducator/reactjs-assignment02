import './App.css';
import Signup from './Components/Form/Sign up/Signup.jsx';
import Login from './Components/Form/Login/Login.jsx';
import Header from './Components/Header/Header.jsx';
import { useState } from 'react';
function App(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleOnClick = ()=>{
    setIsLoggedIn(!isLoggedIn)
    
  }
  return(
    <>
    <div className="parent-container">
      <Header/>
      <form action="">
      {(isLoggedIn)?<Login onClick={handleOnClick} text="Sign In"/>:<Signup onClick={handleOnClick} text="Sign up" />}
    
      </form>
      

    </div>
    </>
  )
}
export default App