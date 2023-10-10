import React from "react";
import './App.css'
import getCookie from "../js/getCookie";
import requestFunc from "../js/requestFunc";

//URLS
import { PROFILE_INFO_URL } from "../Paths/Aut";

//Компаненты
import ForBoss from "./ForBoss";
import ForMaster from "./ForMaster";
import ForClient from './ForClient'
import ProfileContainer from "../components/Profile/ProfileContainer";
import AutContainer from "../components/Autentification/AutContainer";
import PopUpContainer from '../components/PopUp/PopUpContainer'



class AppAPIContainer extends React.Component{

    componentDidMount(){
        //Смотрим в куки авторизован или нет
        let SID = getCookie(document.cookie, "SID")
        //Меняем SID в store
        this.props.getSidAC(SID)
        //Запрашиваем информацию о пользователе и передаем ее в состояние
        this.getProfileInfo(SID)
    }

    //Получает информацию о профиле с сервера и передает ее в состояние
    getProfileInfo = async (SID=this.props.SID)=>{
        //Делаем запрос на сервер
        let serverAnswer = await requestFunc(PROFILE_INFO_URL, SID)
        //Передаем ответ в состоянеи
        this.props.getInfoProfileAC(serverAnswer)
        
    }
    

    render(){
        //console.log(this.props)

        {/* ВСПЛЫВАЮЩЕЕ ОКНО */}
        //<PopUpContainer/>

        //Проверка сессии
        switch(this.props.SID){

            //Если нет сессии
            case (undefined || ''):{
                return (
                    <div className="login-and-reg-container">
                        <AutContainer/>        
                    </div>
                )
            }

            //В остальных случаях
            default:{

                
                //Проверка статуса
                switch(this.props.user.status){

                    //Если АДМИН    
                    case ('admin'):{
                        return (
                            <>
                                {/* ВСПЛЫВАЮЩЕЕ ОКНО */}
                                <PopUpContainer/>
                                
                                
                            </>
                        )      
                    }
                    
                    //Если босс    
                    case ('boss'):{
                        return (
                            <>
                                {/* ВСПЛЫВАЮЩЕЕ ОКНО */}
                                <PopUpContainer/>

                                <ForBoss/>
                            </>
                        )
                    }

                    //Если мастер
                    case 'master':{
                        return (
                            <>
                                {/* ВСПЛЫВАЮЩЕЕ ОКНО */}
                                <PopUpContainer/>

                                <ForMaster/>      
                            </>
                        )
                    }

                    //Если клиент
                    case 'client':{
                        return (
                            <>
                                {/* ВСПЛЫВАЮЩЕЕ ОКНО */}
                                <PopUpContainer/>

                                <ForClient/>  
                            </>
                        )
                    }
                }
            }
        }
        
        
    }
}


export default AppAPIContainer;






