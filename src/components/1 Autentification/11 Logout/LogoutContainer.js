//import React from "react";
import { connect } from "react-redux";

import LogoutAPIContainer from "./LogoutAPIContainer";




let mapStateToProps = (state) => {
    return{
        SID: state.rGeneral.SID,             //Сессия
        
    }
}


let mapDispatchToProps = (dispatch ) => {

    return{
        
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogoutAPIContainer)





