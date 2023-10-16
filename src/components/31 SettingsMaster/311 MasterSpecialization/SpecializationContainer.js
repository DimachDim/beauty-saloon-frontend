//import React from "react";
import { connect } from "react-redux";

import SpecializationAPIContainer from "./SpecializationAPIContainer";

//Экшены
import { transferDataSpecializationAC } from "../../../store/3 Master/31actions";



let mapStateToProps = (state) => {
    return{
        SID: state.rGeneral.SID,                                         //Сессия
        specializations: state.rMaster.specializations,             //Специализации
        
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





