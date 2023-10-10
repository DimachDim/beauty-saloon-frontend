import React from "react";
//import './Registration.css'

//Компанента отвечает за отображение интерфейса регистрации

let Registration = (props) => {
    
    let inpName = React.createRef();
    let inpLastName = React.createRef();
    let inpPhone = React.createRef();
    let inpPassword = React.createRef();
    let inpPassword2 = React.createRef();

    return (
        <div className="registaration-container">
            
            {/* ИМЯ */}
            <p>Ваше имя</p>
            <input ref={inpName}/>

            {/* ФАМИЛИЯ */}
            <p>Ваше фамилия</p>
            <input ref={inpLastName}/>

            {/* НОМЕР ТЕЛЕФОНА */}
            <p>Ваш номер телефона для связи</p>
            <input ref={inpPhone}/>

            {/* ПАРОЛЬ */}
            <p>Придумайте пароль</p>
            <input type="password" ref={inpPassword}/>

            {/* ПОВТОР ПАРОЛЯ */}
            <p>Повторите пароль</p>
            <input type="password" ref={inpPassword2}/>

            {/* ТЕКСТ ОШИБКИ */}
            <p>{props.textEror}</p>

            {/* КНОПКА ОТПРАВКИ */}
            <button onClick={() => props.handlingRegForm(
                                                            inpName.current.value,
                                                            inpLastName.current.value,
                                                            inpPhone.current.value,
                                                            inpPassword.current.value,
                                                            inpPassword2.current.value,
            )}>Регистрация</button>

        </div>
    )    
    
}

export default Registration;







