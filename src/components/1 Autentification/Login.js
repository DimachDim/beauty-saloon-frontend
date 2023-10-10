import React from "react";
//import './Login.css'

//Компанента отвечает за отображение интерфейса входа

let Login = (props) => {
    //console.log(props)
    
    //Ссылки на инпуты
    let inpPhone = React.createRef();
    let inpPassword = React.createRef();
    
    
    
    
    return (
        <div className="login-container">
            
            {/* ТЕЛЕФОН */}
            <p>Номер телефона</p>
            <input ref={inpPhone} type="tel"/>

            {/* ПАРОЛЬ */}
            <p>Пароль</p>
            <input type='password' ref={inpPassword}/>

            {/* ТЕКСТ ОШИБКИ */}
            <p>{props.textEror}</p>

            {/* КНОПКА ВВОДА */}
            {}
            <button 
                onClick={() => props.handlingLoginForm(inpPhone, inpPassword)}
            >Войти
            </button>

        </div>
    )    
    
}

export default Login;







