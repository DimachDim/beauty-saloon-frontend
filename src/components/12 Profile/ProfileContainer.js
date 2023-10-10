//import React from "react";
import { connect } from "react-redux";

import NavBarAPIContainer from "./ProfileAPIContainer";

//Экшены
import {navAC} from "../../store/actions"
import { textErorAC } from "../../store/actions";
import { getInfoProfileAC } from "../../store/actions";




let mapStateToProps = (state) => {
    return{
        textEror: state.reduserMain.textEror,   //Текст ошибки
        nav: state.reduserMain.nav,             //Навигация
        SID: state.reduserMain.SID,             //Сессия
        user: state.reduserMain.user,           //Инфо о пользователе
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





