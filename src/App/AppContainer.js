//import React from "react";
import { connect } from "react-redux";

import AppAPIContainer from "./AppAPIContainer";

//Экшены
import { getSidAC } from "../store/actions";
import { getInfoProfileAC } from "../store/actions";




let mapStateToProps = (state) => {
    return{
        SID: state.reduserMain.SID,             //Сессия
        user: state.reduserMain.user,           //Данные текущего пользователя
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передача сессии в состояние
        getSidAC: (sid) =>{
            dispatch(getSidAC(sid))
        },
        
        //Передает данные о пользователе
        getInfoProfileAC: (info)=>{
            dispatch(getInfoProfileAC(info))
        },

        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppAPIContainer)





