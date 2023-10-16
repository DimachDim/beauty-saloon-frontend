//import React from "react";
import { connect } from "react-redux";

import ScheduleAPIContainer from "./ScheduleAPIContainer";

//Экшены
import { transferInfoDateAC } from "../../store/4 Client/42actions";



let mapStateToProps = (state) => {
    return{
        arrFreeDates: state.rClient.arrFreeDates,               //Данные о свободных датах
        arrDataForCalendar: state.rClient.arrDataForCalendar    //Данные в какой дате есть свободные окна у мастера а в какой нету
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передает данные о дате
        transferInfoDateAC: (date) =>{
            dispatch(transferInfoDateAC(date))
        },
        
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ScheduleAPIContainer)





