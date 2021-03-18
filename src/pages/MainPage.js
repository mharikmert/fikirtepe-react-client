import React,{Component} from 'react';
import '../css/main.css';
import cagdasLogo from '../assets-img/cagdas-logo.png';
import MainPageButton from '../components/MainPageButton';
class MainPage extends Component{
  render(){
    const {push} = this.props.history;
    
    /* 
      How should be refactor onClick = redirect(path) in react?
    */
    const redirectLogin = () => {
      push('/login');
    }
    const redirectRegister = () => {
      push('/register')
    }

    // const redirect = async (path) =>  {
    //   push(path);
    // }

    return (
      <>
        <div className = 'top-line-container'>
              {/* if you put anything between the opening and closing <img> tags (even just a single space),
                gatsby appears to think it has child elements and will not compile properly.*/}
              <div className = "logo-container"> <img alt = 'cagdas logo' src = {cagdasLogo}></img></div>
              <div className = "title-container"> <h1>Fikirtepe Eğitime Destek Projesi </h1></div>
              {/* <a href = "/register"> <button id = "register-buttonx" type = "button" className = "button"> KAYIT </button></a> */}
              {/* <a href = "/login"> <button id = "login-buttonx" type = "button" className = "button"> GİRİŞ  </button> </a> */}
                <MainPageButton text = 'KAYIT' onClick = {redirectRegister}/>
                <MainPageButton text = 'GİRİŞ' onClick = {redirectLogin}/> 
        </div>

        <div className = 'body-container'>
            <div className = 'sentence-container'>
                  <p className = "body-sentence"> Geleceğin güvencesi; <br></br> sağlam temellere dayalı bir eğitime, <br></br>
                      eğitim ise öğretmenlere dayanır.<br></br> </p>
                  <p className = "body-sentence"> Mustafa Kemal Atatürk </p>
            </div>
        </div>
      </>
    )
  }
}

export default MainPage
