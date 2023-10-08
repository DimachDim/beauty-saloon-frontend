//import React from "react";
import { connect } from "react-redux";

import ServecesAPIContainer from "./ServecesAPIContainer";

//Экшены
import {trDataForSetingServiceAC} from '../../../store/Master/actions'



let mapStateToProps = (state) => {
    return{
        SID: state.reduserMain.SID,
        
        dataForSetingServices: state.masterR.dataForSetingServices,     //Массив с данными для настройки услуг
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передает данные для настройки услуг
        trDataForSetingServiceAC: (arrData) =>{
            dispatch(trDataForSetingServiceAC(arrData))
        }, 

        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ServecesAPIContainer)





