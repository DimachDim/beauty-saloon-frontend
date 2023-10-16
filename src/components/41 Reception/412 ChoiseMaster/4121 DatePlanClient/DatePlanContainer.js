//import React from "react";
import { connect } from "react-redux";

import DatePlanAPIContainer from "./DatePlanAPIContainer";

//Экшены
import { trDataDateAC } from "../../../../store/4 Client/41actions";


let mapStateToProps = (state) => {
    return{
        SID: state.rGeneral.SID,                         //Сессия
        
        selectDate: state.rClient.selectDate,       //Выбранная дата
        idSelectMaster: state.rClient.idSelectMaster,         //Хранит id выбранного мастера
        arrDataDate: state.rClient.arrDataDate,             //Хранит информацию для плана даты
        
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        ////Передает информацию для плана даты      
        trDataDateAC: (arr) =>{
            dispatch(trDataDateAC(arr))
        },

        


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DatePlanAPIContainer)





