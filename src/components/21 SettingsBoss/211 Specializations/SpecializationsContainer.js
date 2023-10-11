//import React from "react";
import { connect } from "react-redux";

import SpecializationsAPIContainer from "./SpecializationsAPIContainer";

//Экшены
import { transferDataSpecializationAC } from "../../../store/actions";
import { dataPopUpAC } from "../../../store/actions";



let mapStateToProps = (state) => {
    return{
        SID: state.reduserMain.SID,                                         //Сессия
        specializations: state.rediserSettings.specializations,             //Специализации  
        
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





