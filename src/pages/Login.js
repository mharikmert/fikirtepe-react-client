import '../css/style.css';
import React from 'react'; 
import axios from 'axios';
class Login extends React.Component{
    
    state = {
        id: null,
        password: null
    }

    onChange = event  => {
        const {name, value} = event.target; 
        this.setState({
            [name]: value
        })
        console.log(this.state);
    }

    onClick  = event => {
        event.preventDefault();
        const {id, password} = this.state; 
        console.log(id, password)
        const creds = {id, password};
        console.log(creds)
        axios.post('/api/login', creds);
    }
    
    render () {

        const {push} = this.props.history;
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
                    {/*<Warning message = 'Lütfen şifrenizi falan giriniz'/> */}


                <div id = "LoginPanel">
                    <div id= 'slogan'> EĞİTİM & DEĞİŞİM & GELİŞİM </div>
                    <div id = "logo"></div>
                        <div id = "form" >
                            <Input id = 'id' name = 'id' placeholder = 'Kullanıcı Adı / TCKN' onChange = {this.onChange}></Input>
                            <Input type = 'password' name = 'password' placeholder= 'Şifre' onChange = {this.onChange}></Input> 
                            <button id = 'login-button' value = {'Giriş'} onClick = {this.onClick}></button>
                            <PasswordDiv info = 'Şifremi unuttum'></PasswordDiv>
                            <PasswordDiv info = 'Şifre Oluştur'></PasswordDiv>
                        </div>
                </div>
            </div>
        )
    }
}

const Warning = ({message}) => {
    return <div className = 'warning-message'> {message} </div> 
}
const PasswordDiv = ({info}) => {
    return <button id = 'password-div' className = 'input'> {info} </button>
}
const Input = (props) => {
    return (
        <input className = 'input' id = {props.id} name = {props.name} 
        placeholder = {props.placeholder} value = {props.value} type = {props.type} onChange = {props.onChange}>
        </input>
    )
}
export default Login
