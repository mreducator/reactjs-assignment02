import Button from "../../Button/Button.jsx";
function Login({onClick , text}){
return(
    <>
      <label htmlFor="username"></label>
      <input type="text" id="username" placeholder="Phone number,username,or email" />
      <label htmlFor="password"></label>
      <input type="password" id="password" placeholder="Enter ur password" />
      <Button btnTxt={text}/>
      <p>Don't have an account?<span onClick={onClick}>Sign up</span></p>
    </>
)

}
export default Login