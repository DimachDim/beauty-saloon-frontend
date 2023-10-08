import React from "react";
import './Services.css'



let Service = (props) => {
    //console.log(props)
    
    
    return (
        <div className="spesialization-service-container_service">
            
            {/* НАЗВАНИЕ УСЛУГИ */}
            {props.title}

            {/* КНОПКА УДАЛЕНИЯ */}
            <button onClick={()=>props.clickDelService(props.id)}>X</button>

        </div>
    )    
    
}

export default Service;







