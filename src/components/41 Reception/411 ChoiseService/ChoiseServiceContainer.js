//import React from "react";
import { connect } from "react-redux";

import ChoiseServiceAPIContainer from "./ChoiseServiceAPIContainer";


//Экшены
import { trSpecWithServAC } from "../../../store/Client/actions";
import { trFreeDatesAC } from "../../../store/Client/actions";
import { trIdServeceAC } from "../../../store/Client/actions";


let mapStateToProps = (state) => {
    return{
        SID: state.reduserMain.SID,                     
        specWithServ: state.clientR.specWithServ
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передает данные для выбора услуги
        trSpecWithServAC: (arrData) =>{
            dispatch(trSpecWithServAC(arrData))
        }, 

        //Передает Свободные даты на выбранную услугу
        trFreeDatesAC: (arrData) =>{
            dispatch(trFreeDatesAC(arrData))
        },
        //Передает id выбранной усдуги
        trIdServeceAC: (id) =>{
            dispatch(trIdServeceAC(id))
        },
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChoiseServiceAPIContainer)





