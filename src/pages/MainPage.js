import React,{Component} from 'react';
import '../css/main.css';
import cagdasLogo from '../assets-img/cagdas-logo.png';
import MainPageButton from '../components/MainPageButton';
class MainPage extends Component{
  render(){
    //obj destructuring for push property, redirects the page to the path
    const {push} = this.props.history;
    
    return (
      <>
        <div className = 'top-line-container'>
              <div className = "logo-container"> <img alt = 'cagdas logo' src = {cagdasLogo}></img></div>
              <div className = "title-container"> <h1>Fikirtepe Eğitime Destek Projesi </h1></div>
                <MainPageButton text = 'KAYIT' onClick = { () => push('/register')}/>
                <MainPageButton text = 'GİRİŞ' onClick = { () => push('/login')}/> 
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
