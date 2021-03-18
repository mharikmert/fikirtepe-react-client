import '../css/style.css';
import React from 'react'
class Login extends React.Component{
    render () {
        const {push} = this.props.history;
        const redirect = () => {push('/')}
        return (
            <div id = 'LoginPage'>
                <div id = "LoginTopLine">
                    <div id = "LoginTitle">
                        Öğrenci&nbsp;Bilgi&nbsp;Sistemi
                    </div>

                    <div className = "turn-back-btn-container">
                        <button className = "turn-back-btn" onClick={redirect}> Ana Sayfaya Dön </button>
                    </div>
                </div>
                    {/* sample warning case */ }
                    <Warning message = 'Lütfen şifrenizi falan giriniz'/> 


                <div id = "LoginPanel">
                    <div id= 'slogan'> EĞİTİM & DEĞİŞİM & GELİŞİM </div>
                    <div id = "logo"></div>
                            <div id = "form" >
                                <Input id = 'userID' name = 'user_id' placeholder = 'Kullanıcı Adı / TCKN'></Input>
                                <Input type = 'password' name = 'password' placeholder= 'Şifre'></Input> 
                                <Input id = 'login-button' value = {'Giriş'}></Input>
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
        placeholder = {props.placeholder} value = {props.value} type = {props.type}>
        </input>
    )
}
export default Login
