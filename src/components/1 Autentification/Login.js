import React from "react";


let Login = (props) => {
    
    let textError = props.textError
    let loginAPI = props.loginAPI
    let textErrorAC = props.textErrorAC

    //Ссылки на инпуты
    let inpPhone = React.createRef();
    let inpPassword = React.createRef();
    
    //Валидация формы
    function valudation(phone, password){
        
        let erorFlag = false                //Флаг на ишибку

        //Вытаскиваем содержимое полей
        phone = phone.current.value
        password = password.current.value

        //Проверяем не пустые ли данные
        switch(''){
            case phone: textErrorAC('Укажите телефон'); erorFlag=true; break
            case password: textErrorAC('Введите пароль'); erorFlag=true; break
            default: erorFlag = false;
        }
        
        //Если нет ошибок
        if(!erorFlag){
            //Отправляем данные на сервер
            loginAPI(phone,password)
        }

            
    }
    
    
    return (
        <div className="login-container">
            
            {/* ТЕЛЕФОН */}
            <p>Номер телефона</p>
            <input ref={inpPhone} type="tel"/>

            {/* ПАРОЛЬ */}
            <p>Пароль</p>
            <input type='password' ref={inpPassword}/>

            {/* ТЕКСТ ОШИБКИ */}
            <p>{textError}</p>

            {/* КНОПКА ВВОДА */}
            <button onClick={() => valudation(inpPhone, inpPassword)}>
                Войти
            </button>

        </div>
    )    
    
}

export default Login;







