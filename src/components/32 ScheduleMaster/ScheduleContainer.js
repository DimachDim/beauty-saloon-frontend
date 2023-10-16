//import React from "react";
import { connect } from "react-redux";

import ScheduleAPIContainer from "./ScheduleAPIContainer";

//Экшены
import { transferInfoDateAC } from "../../store/3 Master/32actions";



let mapStateToProps = (state) => {
    return{
        user: state.rGeneral.user,               //Данные пользователя
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





