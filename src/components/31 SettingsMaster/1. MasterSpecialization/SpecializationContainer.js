//import React from "react";
import { connect } from "react-redux";

import SpecializationAPIContainer from "./SpecializationAPIContainer";

//Экшены
import { transferDataSpecializationAC } from "../../../store/actions";



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

        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SpecializationAPIContainer)





