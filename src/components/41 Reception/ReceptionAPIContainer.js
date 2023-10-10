import React from "react";


//URLS


//КОМПАНЕНТЫ
import ChoicePath from "./ChoicePath";


class ReceptionAPIContainer extends React.Component{

    componentDidMount(){
        this.props.cleanState()
    }

    
    

    render(){
        //console.log(this.props)
        
        
        return <ChoicePath/>
        
    }
    
}


export default ReceptionAPIContainer;








