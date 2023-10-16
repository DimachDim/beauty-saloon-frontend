//import React from "react";
import { connect } from "react-redux";

import DatePlanAPIContainer from "./DatePlanAPIContainer";

//Экшены
import { transferDataDateAC } from "../../store/3 Master/33actions";
import { trDataFormDatePlanAC } from "../../store/3 Master/33actions";


let mapStateToProps = (state) => {
    return{
        SID: state.rGeneral.SID,                            //Сессия
        selectDate: state.rMaster.selectDate,               //Выбранная дата
        dataDate: state.rMaster.dataDate,                   //Данные за выбранную дату
        dataFormDatePlan: state.rMaster.dataFormDatePlan,   //Данные для формы
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





