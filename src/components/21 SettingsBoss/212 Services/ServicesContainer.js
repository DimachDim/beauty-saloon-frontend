//import React from "react";
import { connect } from "react-redux";

import ServicesAPIContainer from "./ServicesAPIContainer";

//Экшены
import { transferDataSpecializationAC } from "../../../store/2 Boss/21actions";
import { transDataServicesAC } from "../../../store/2 Boss/21actions";
import { transDataSpecServicessAC } from "../../../store/2 Boss/21actions";



let mapStateToProps = (state) => {
    return{
        
        specializations: state.rBoss.specializations,             //Специализации  
        services: state.rBoss.services,                           //Услуги  
        specWithServices: state.rBoss.specWithServices,           //Совмещенный массив
        SID: state.rGeneral.SID,   
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передает имеющиеся специализации
        transferDataSpecializationAC: (arrData) =>{
            dispatch(transferDataSpecializationAC(arrData))
        }, 

        //Передает данные о имеющихся услугах
        transDataServicesAC: (arrData) =>{
            dispatch(transDataServicesAC(arrData))
        }, 

        //Передает данные для объедененного массива специализаций и услуг
        transDataSpecServicessAC: (arrData) =>{
            dispatch(transDataSpecServicessAC(arrData))
        }, 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ServicesAPIContainer)





