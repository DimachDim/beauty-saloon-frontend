//import React from "react";
import { connect } from "react-redux";

import ReceptionAPIContainer from "./ReceptionAPIContainer";

//Экшены
import {cleanState} from '../../store/Client/actions'



let mapStateToProps = (state) => {
    return{
        
        
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        //Очищает состояние
        cleanState: () =>{
            dispatch(cleanState())
        }, 

        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReceptionAPIContainer)





