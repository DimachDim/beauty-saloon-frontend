//import React from "react";
import { connect } from "react-redux";

import AutAPIContainer from "./AutAPIContainer";

//Экшены
import {navAC} from "../../store/1 General/actions"
import { textErorAC } from "../../store/1 General/actions";
import { getSidAC } from "../../store/1 General/actions";



let mapStateToProps = (state) => {
    return{
        textEror: state.rGeneral.textEror,   //Текст ошибки
        nav: state.rGeneral.nav,             //Навигация
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





