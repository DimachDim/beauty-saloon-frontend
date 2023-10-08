//import React from "react";
import { connect } from "react-redux";

import DatePlanAPIContainer from "./DatePlanAPIContainer";

//Экшены
import { transferDataDateAC } from "../../store/Master/actions";
import { trDataFormDatePlanAC } from "../../store/Master/actions";


let mapStateToProps = (state) => {
    return{
        SID: state.reduserMain.SID,                         //Сессия
        selectDate: state.rediserSchedule.selectDate,       //Выбранная дата
        dataDate: state.masterR.dataDate,                   //Данные за выбранную дату

        dataFormDatePlan: state.masterR.dataFormDatePlan,   //Данные для формы
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
                
        //Передает данные из базы расписаний на выбранную дату
        transferDataDate: (arrData) =>{
            dispatch(transferDataDateAC(arrData))
        },

        //Передаем данные для формы окна даты
        trDataFormDatePlanAC: (arrData) =>{
            dispatch(trDataFormDatePlanAC(arrData))
        },


    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DatePlanAPIContainer)





