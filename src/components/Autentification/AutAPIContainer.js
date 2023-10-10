import React from "react";
import './Style.css'

import requestFunc from "../../js/requestFunc";
import saveCookie from "../../js/saveCookie"

//URLS
import { LOGIN_URL } from "../../Paths/Aut";
import { REG_URL } from "../../Paths/Aut";

//КОМПАНЕНТЫ
import Registration from "./Registration";
import Login from "./Login";



class AutAPIContainer extends React.Component{

    componentDidMount(){
    }

   //================= LOGIN ====================
   //Обработка содержимого формы login 
    handlingLoginForm = async (phone, password) =>{
        
        let erorFlag = false                //Флаг на ишибку

        //Вытаскиваем содержимое полей
        phone = phone.current.value
        password = password.current.value

        //Проверяем не пустые ли данные
        switch(''){
            case phone: this.props.textErorAC('Укажите телефон'); erorFlag=true; break
            case password: this.props.textErorAC('Введите пароль'); erorFlag=true; break
            default: erorFlag = false;
        }
        
        //Если нет ошибок
        if(!erorFlag){

            //Собираем данные
            let obj = {
                phone: phone,
                password: password
            }

            //Отправляем данные на сервер
            let serverAnswer = await requestFunc(LOGIN_URL, obj)
            
            //Смотрим пришла ли ошибка с сервера
            switch(serverAnswer.textError){
                //ЕСЛИ номер занят
                case 'user does not exist': this.props.textErorAC('Такой пользователь незарегистрирован'); break
                //ЕСЛИ незвестная ошибка
                case 'incorrect password': this.props.textErorAC('Неверный пароль'); break
                //ЕСЛИ не пришла ошибка
                default: 
                    // Передаем сессию в куки
                    saveCookie('SID', serverAnswer.SID, 2)
                    // Передаем сессию в состояние
                    this.props.getSidAC(serverAnswer.SID)
                    // Задаем главную страницу
                    this.props.navAC('home')
                    // Обнавляем страницу
                    window.location.reload()
            }


            
        }
    }

   //================= LOGIN end ================
   

   //================= REG ====================
   //Обработка формы регистрации
    handlingRegForm = async (name, lastName, phone, password, password2) => {
        
        let erorFlag = false                //Флаг на ишибку
        
        //Проверка на пустоту
        switch(''){
            case name: this.props.textErorAC('Введите Ваше имя'); erorFlag=true; break
            case lastName: this.props.textErorAC('Укажите фамилию'); erorFlag=true; break
            case phone: this.props.textErorAC('Укажите телефон'); erorFlag=true; break
            case password: this.props.textErorAC('Введите пароль'); erorFlag=true; break
            case password2: this.props.textErorAC('Повторите пароль'); erorFlag=true; break
            default: erorFlag = false; this.props.textErorAC('');
        }

        //Проверяем повторм пароля
        if(password != password2){
            erorFlag = true;
            this.props.textErorAC('Пароли не совпадают');
        }

        //Если небыло ошибок
        if(!erorFlag){

            //Собираем данные
            let obj = {
                name: name,
                lastName: lastName,
                phone: phone,
                password: password
            }

            //Отправляем данные на сервер
            let serverAnswer = await requestFunc(REG_URL, obj)

            //Смотрим пришла ли ошибка с сервера
            switch(serverAnswer.textError){
                //ЕСЛИ номер занят
                case 'number is busy': this.props.textErorAC('Такой номер уже занят'); break
                //ЕСЛИ незвестная ошибка
                case 'number is busy': this.props.textErorAC('Что-то пошло не так'); break
                //ЕСЛИ не пришла ошибка
                default: 
                    // Передаем сессию в куки
                    saveCookie('SID', serverAnswer.SID, 2)
                    // Передаем сессию в состояние
                    this.props.getSidAC(serverAnswer.SID)
                    // Задаем главную страницу
                    this.props.navAC('home')
                    // Обнавляем страницу
                    window.location.reload()
            }
            
        }
        
    }
   //================= REG end ================

    

    render(){
        //console.log(this.props)
        
        return(
            <div className="aut-container">
                {/* ССЫЛКИ */}
                <div className="btn-container">
                    <a onClick={()=> this.props.navAC('login')}>Вход</a>
                    <a onClick={()=> this.props.navAC('reg')}>Регистрация</a>   
                </div>

                {/* ФОРМА ВВОДА */}
                <div className="aut-form">
                    {this.props.nav == 'login' 
                    ?   <Login
                            textEror={this.props.textEror                   /* текст ошибки */}

                            handlingLoginForm={this.handlingLoginForm       /* форма обрабтки */}
                        /> 
                    :   <Registration
                            textEror={this.props.textEror                   /* текст ошибки */}
                            
                            handlingRegForm={this.handlingRegForm           /* форма обработки */}
                        />
                    }
                </div>    
            </div>
        )      
    }
}


export default AutAPIContainer;








