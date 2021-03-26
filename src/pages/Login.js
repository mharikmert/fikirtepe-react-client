import '../css/style.css';
import axios from 'axios';
import {useState} from 'react';

const Login = props => {
    
    //useState hooks for user credentials 
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [warn, setWarn] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const onClickLogin = () => {
        setButtonClicked(true);
        const creds = {username, password};
        //post credentials basic authentication 
        axios.post('/api/auth',{},{auth:creds})
        //success case after login request 
        .then((response) =>{
            setButtonClicked(false);
            // TO DO 
            /*  -> redirecting user dynamically to pages for the user  
                    smthing like domain.com/username or user id 
                -> authentication control for access permission of the user 
            */
            push('menu')
        //failure case 
        },(error) => {
            setButtonClicked(false);
            //warning timeout
            setTimeout ( () => setWarn(false), 1500);
            setWarn(true);
        });
    }
    
    const onKeyPress = event => {
        if(event.key === 'Enter') onClickLogin();
    }
    //push -> redirection function
    const {history} = props;
    const {push} = history;

    return (
        <div id = 'LoginPage'>
            <div id = "LoginTopLine">
                <div id = "LoginTitle">
                    Öğrenci&nbsp;Bilgi&nbsp;Sistemi
                </div>

                <div className = "turn-back-btn-container">
                    <button className = "turn-back-btn" onClick={() => push('/')}> Ana Sayfaya Dön </button>
                </div>
            </div>
                {/* sample warning case */ }
                {<Warning message = 'Lütfen şifrenizi falan giriniz' warn = {warn}/>}


            <div id = "LoginPanel">
                <div id= 'slogan'> EĞİTİM & DEĞİŞİM & GELİŞİM </div>
                <div id = "logo"></div>
                    <div id = "form" >
                        <Input id = 'id' type = 'text' placeholder = 'Kullanıcı Adı / TCKN' onChange = {event => setUsername(event.target.value)} onKeyPress = {onKeyPress}></Input>
                        <Input type = 'password' placeholder= 'Şifre' onChange = {event => setPassword(event.target.value)} onKeyPress = {onKeyPress}></Input> 
                        <button className = 'input' id = 'login-button' onClick = {onClickLogin} onKeyPress = {onKeyPress}> 
                        {buttonClicked && <span className = "spinner-border spinner-border-sm"> </span>}
                        &nbsp;&nbsp;GİRİŞ </button>
                        <PasswordDiv info = 'Şifremi unuttum'></PasswordDiv>
                        <PasswordDiv info = 'Şifre Oluştur'></PasswordDiv>
                    </div>
            </div>
        </div>
    )
}

const Warning = ({message, warn}) => {
    let display = warn ? 'block': 'none'

    return <div className = 'warning-message' style = {{display: display}}> {message} </div> 
}
const PasswordDiv = ({info}) => {
    return <button id = 'password-div' className = 'input'> {info} </button>
}
const Input = (props) => {
    return (
        <input className = 'input' id = {props.id} name = {props.name} 
        placeholder = {props.placeholder} value = {props.value} type = {props.type} onChange = {props.onChange} onKeyPress = {props.onKeyPress}>
        </input>
    )
}
export default Login
