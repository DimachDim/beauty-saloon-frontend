//import React from "react";
import { connect } from "react-redux";

import ChoiseMasterAPIContainer from "./ChoiseMasterAPIContainer";

//Экшены
import { trDataMastersAC } from "../../../store/4 Client/41actions";
import { trDataForCalendarAC } from "../../../store/4 Client/41actions";
import { trIdMasterAC } from "../../../store/4 Client/41actions";



let mapStateToProps = (state) => {
    return{
        arrDataMasters: state.rClient.arrDataMasters    //Хранит информацию о мастерах        
        
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
        trIdMasterAC: (arrData) =>{
            dispatch(trIdMasterAC(arrData))
        }, 
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChoiseMasterAPIContainer)





