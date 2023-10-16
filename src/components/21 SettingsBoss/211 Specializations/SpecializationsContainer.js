//import React from "react";
import { connect } from "react-redux";

import SpecializationsAPIContainer from "./SpecializationsAPIContainer";

//Экшены
import { transferDataSpecializationAC } from "../../../store/2 Boss/21actions";
import { dataPopUpAC } from "../../../store/1 General/actions";



let mapStateToProps = (state) => {
    return{
        SID: state.rGeneral.SID,                                         //Сессия
        specializations: state.rBoss.specializations,             //Специализации  
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передает имеющиеся специализации
        transferDataSpecializationAC: (arrData) =>{
            dispatch(transferDataSpecializationAC(arrData))
        }, 

        //Передает данные о всплывающем окне
        dataPopUpAC: (active, text, closeText, okText, func, dataFunc) =>{
            dispatch(dataPopUpAC(active, text, closeText, okText, func, dataFunc))
        },
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SpecializationsAPIContainer)





