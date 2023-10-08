//import React from "react";
import { connect } from "react-redux";

import ServicesAPIContainer from "./ServicesAPIContainer";

//Экшены
import { transferDataSpecializationAC } from "../../../store/actions";
import { transDataServicesAC } from "../../../store/actions";
import { transDataSpecServicessAC } from "../../../store/actions";



let mapStateToProps = (state) => {
    return{
        
        specializations: state.rediserSettings.specializations,             //Специализации  
        services: state.rediserSettings.services,                           //Услуги  
        specWithServices: state.rediserSettings.specWithServices,           //Совмещенный массив
        SID: state.reduserMain.SID,   
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





