//import React from "react";
import { connect } from "react-redux";

import ChoiseMasterAPIContainer from "./ChoiseMasterAPIContainer";

//Экшены
import { trDataMastersAC } from "../../../store/Client/actions";
import { trDataForCalendarAC } from "../../../store/Client/actions";
import { trIdServeceAC } from "../../../store/Client/actions";



let mapStateToProps = (state) => {
    return{
        arrDataMasters: state.clientR.arrDataMasters    //Хранит информацию о мастерах        
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передает информацию о мастерах
        trDataMastersAC: (arrData) =>{
            dispatch(trDataMastersAC(arrData))
        }, 

        //Передает информацию для календаря
        trDataForCalendarAC: (arrData) =>{
            dispatch(trDataForCalendarAC(arrData))
        }, 

        //Передает id выбранного мастера
        trIdServeceAC: (arrData) =>{
            dispatch(trIdServeceAC(arrData))
        }, 
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChoiseMasterAPIContainer)





