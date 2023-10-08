import React from "react";
import { useNavigate } from "react-router-dom";




let DatehBox = (props) => {
    //console.log(props)
    
    let navigator = useNavigate()

    //Если первое число то будет указана позиция для старта
    let gridStart

    if(props.fullData.getDate() == 1){
        if(props.fullData.getDay() == 0){
            gridStart = 7           
        }else{
            gridStart = props.fullData.getDay()
        }
    }
    
    return (
        <div 
            className="date-container-master" 
            style={{gridColumnStart: gridStart}}
            onClick={()=>{navigator('/schedule/data-plan'); props.transferInfoDateAC(props.fullData)}}
        >

            {/* ДАТА */}      
            {props.fullData.getDate()}
        </div>
    )    
    
}

export default DatehBox;







