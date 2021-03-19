const Register = () => {
    return (
        <div>
            <form className = 'form-horizontal'>
                <h2 style = {headerStyle}> Fikirtepe Kayıt Formu </h2>
                <Input type = 'text' placeholder = 'Ad'></Input>
                <Input type = 'text' placeholder = 'Soyad'></Input>
                <Input type = 'email' placeholder = 'Email'></Input>
                <Input type = 'date' placeholder = 'Doğum Tarihi'></Input>
                <Input type = 'phoneNumber' placeholder = 'Telefon Numarası'></Input>
                <Input type = 'text' placeholder = 'Ad'></Input>
                
                <Button text = 'Kayıt Ol' type = 'submit' style = {buttonStyle}></Button> 
            </form>
            
        </div>
    )
}
const Input = ({type, placeholder}) => {
    return (
        <div className = 'form-group' role = 'form' style = {formStyle}>
                <input className = 'form-control' type = {type} placeholder = {placeholder}></input>
            {/* <div className = 'col-sm-9'>
                <label className = 'col-sm-3 control-label' for = {type}> </label>
            </div> */}
        </div>
    )
    
}
const Button = ({text, type, style}) => {
    return <button className = 'btn btn-primary btn-block' style = {style} type = {type} text = {text}> {text} </button>   
}
const formStyle = {
    maxWidth: '530px',
    padding: '15px',
    margin: '0 auto',
    borderRadius: '0.3em',
    backgroundColor: '#f2f2f2'
}
const headerStyle = {
    fontFamily: 'Open Sans sans-serif',
    fontSize: '40px',
    fontWeight: '600',
    color: '#000000',
    marginTop: '5%',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '4px',
}
const buttonStyle = {
    width: '20%',
    maxWidth: '530px',
    margin: '25px auto',
    backgroundColor: 'darkred'
}
export default Register
