//import React from "react";
import { connect } from "react-redux";

import NavBarAPIContainer from "./ProfileAPIContainer";

//Экшены
import {navAC} from "../../store/1 General/actions"
import { textErorAC } from "../../store/1 General/actions";




let mapStateToProps = (state) => {
    return{
        textEror: state.rGeneral.textEror,   //Текст ошибки
        nav: state.rGeneral.nav,             //Навигация
        SID: state.rGeneral.SID,             //Сессия
        user: state.rGeneral.user,           //Инфо о пользователе
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Навигация
        navAC: (path) =>{
            dispatch(navAC(path))
        }, 

        //Передает текст ошибки
        textErorAC: (text) =>{
            dispatch(textErorAC(text))
        },
        
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBarAPIContainer)





