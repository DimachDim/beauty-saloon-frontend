//import React from "react";
import { connect } from "react-redux";

import ScheduleAPIContainer from "./ScheduleAPIContainer";

//Экшены
import { navAC } from "../../store/actions";
import { transferInfoDateAC } from "../../store/actions";



let mapStateToProps = (state) => {
    return{
        //textEror: state.reduserMain.textEror,   //Текст ошибки
        nav: state.reduserMain.nav,                 //Навигация
        user: state.reduserMain.user,               //Данные пользователя
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Навигация
        navAC: (path) =>{
            dispatch(navAC(path))
        }, 

        //Передает данные о дате
        transferInfoDateAC: (date) =>{
            dispatch(transferInfoDateAC(date))
        },

        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleAPIContainer)





