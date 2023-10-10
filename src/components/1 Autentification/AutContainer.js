//import React from "react";
import { connect } from "react-redux";

import AutAPIContainer from "./AutAPIContainer";

//Экшены
import {navAC} from "../../store/actions"
import { textErorAC } from "../../store/actions";
import { getSidAC } from "../../store/actions";



let mapStateToProps = (state) => {
    return{
        textEror: state.reduserMain.textEror,   //Текст ошибки
        nav: state.reduserMain.nav,             //Навигация
        
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
        
        //Передача сессии в состояние
        getSidAC: (sid) =>{
            dispatch(getSidAC(sid))
        },
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AutAPIContainer)





