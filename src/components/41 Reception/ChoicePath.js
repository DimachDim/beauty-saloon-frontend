import React from "react";
import { useNavigate } from "react-router-dom";
import './Style.css'



let ChoicePath = (props) => {
    //console.log(props)
    
    

    let navigate = useNavigate();
    
    return (
        <div className="reception-button-container">
            <button onClick={()=> navigate('/reception/choise-service')}>Выбрать услугу</button>
            <button onClick={()=> navigate('/reception/choise-master')}>Выбрать мастера</button>
        </div>
    )    
    
}

export default ChoicePath;







