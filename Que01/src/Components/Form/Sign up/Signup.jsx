import Button from "../../Button/Button.jsx";
function Signup({onClick, text}){
    console.log(text)
    return(
        <>
            <label htmlFor="number"></label>
            <input type="text"id="number" placeholder="Mobile Number or Email"/>
            <label htmlFor="name"></label>
            <input type="text" id="name"placeholder="FullName"/>
            <label htmlFor="username"></label>
            <input type="text" id="username" placeholder="Phone number,username,or email" />
            <label htmlFor="password"></label>
            <input type="password" id="password" placeholder="Enter ur password" />
            <Button btnTxt={text}/>
            <p>have an account?<span onClick={onClick}>LogIn</span></p>
        </>
    )
}
export default Signup