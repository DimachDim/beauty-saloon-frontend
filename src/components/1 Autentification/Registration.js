import React from "react";
import { useNavigate } from "react-router-dom";

let Registration = (props) => {
    


    let textError = props.textError
    let registrationAPI = props.registrationAPI
    let textErrorAC = props.textErrorAC

    //Ссылки на инпуты
    let inpName = React.createRef();
    let inpLastName = React.createRef();
    let inpPhone = React.createRef();
    let inpPassword = React.createRef();
    let inpPassword2 = React.createRef();

    //Вылидация формы
    function validation(name, lastName, phone, password, password2){

        let erorFlag = false                //Флаг на ишибку
        
        //Проверка на пустоту
        switch(''){
            case name: textErrorAC('Введите Ваше имя'); erorFlag=true; break
            case lastName: textErrorAC('Укажите фамилию'); erorFlag=true; break
            case phone: textErrorAC('Укажите телефон'); erorFlag=true; break
            case password: textErrorAC('Введите пароль'); erorFlag=true; break
            case password2: textErrorAC('Повторите пароль'); erorFlag=true; break
            default: erorFlag = false; textErrorAC('');
        }

        //Проверяем повторм пароля
        if(password != password2){
            erorFlag = true;
            textErrorAC('Пароли не совпадают');
        }

        //Если небыло ошибок
        if(!erorFlag){
            //Отправляем на сервер
            registrationAPI(name,lastName,phone,password)
              
            
        }
        
    }

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
            <p>{textError}</p>

            {/* КНОПКА ОТПРАВКИ */}
            <button onClick={() => validation(
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







