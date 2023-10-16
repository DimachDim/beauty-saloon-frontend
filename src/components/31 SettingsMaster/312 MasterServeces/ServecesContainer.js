//import React from "react";
import { connect } from "react-redux";

import ServecesAPIContainer from "./ServecesAPIContainer";

//Экшены
import {trDataForSetingServiceAC} from '../../../store/3 Master/31actions'



let mapStateToProps = (state) => {
    return{
        SID: state.rGeneral.SID,
        dataForSetingServices: state.rMaster.dataForSetingServices,     //Массив с данными для настройки услуг
        
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





