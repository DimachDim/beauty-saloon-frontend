//import React from "react";
import { connect } from "react-redux";

import PopUpAPIContainer from "./PopUpAPIContainer";

//Экшены
import { dataPopUpAC } from "../../store/actions";



let mapStateToProps = (state) => {
    return{
        popUp: state.reduserMain.popUp,   //Текст ошибки
        
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Передает данные о всплывающем окне
        dataPopUpAC: (active, text, closeText, okText, func, dataFunc) =>{
            dispatch(dataPopUpAC(active, text, closeText, okText, func, dataFunc))
        },

        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PopUpAPIContainer)





