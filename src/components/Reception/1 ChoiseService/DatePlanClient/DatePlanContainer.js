//import React from "react";
import { connect } from "react-redux";

import DatePlanAPIContainer from "./DatePlanAPIContainer";

//Экшены
import { trDataDateAC } from "../../../../store/Client/actions";


let mapStateToProps = (state) => {
    return{
        SID: state.reduserMain.SID,                         //Сессия
        
        selectDate: state.rediserSchedule.selectDate,       //Выбранная дата
        idSelectServ: state.clientR.idSelectServ,           //Хранит id выбранной услуги
        arrDataDate: state.clientR.arrDataDate,             //Хранит информацию для плана даты
        
        
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





