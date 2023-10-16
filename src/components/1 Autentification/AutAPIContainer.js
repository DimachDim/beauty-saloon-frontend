import React from "react";
import './Style.css'

import requestFunc from "../../js/requestFunc";
import saveCookie from "../../js/saveCookie"

//URLS
import { LOGIN_URL } from "../../Paths/Aut";
import { REG_URL } from "../../Paths/Aut";

//КОМПАНЕНТЫ
import Aut from "./Aut";



class AutAPIContainer extends React.Component{

    componentDidMount(){
    }


   //API для login
    loginAPI = async (phone, password) =>{           

        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(LOGIN_URL, {phone,password})
        
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
                // Обнавляем страницу
                window.location.reload()      
        }        
    }


   //API для регистрации
    registrationAPI = async (name, lastName, phone, password, password2) => {
        
        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(REG_URL, {name, lastName, phone, password})

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
                // Обнавляем страницу
                window.location.reload()
                window.location ='/'
            }
        
    
        
    }
 

    

    render(){
        //console.log(this.props)
        
        return(
            <Aut
                textError={this.props.textError     /* текст ошибки */}

                loginAPI={this.loginAPI}
                registrationAPI={this.registrationAPI}
                textErrorAC={this.props.textErorAC}
            />
        )           
    }
}


export default AutAPIContainer;








