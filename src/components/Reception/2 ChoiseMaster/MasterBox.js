import React from "react";
import {useNavigate} from 'react-router-dom'
import './Style.css'

let MasterBox = (props) => {
    //console.log(props)
    
    let FNandLN = props.lastName + ' ' + props.name         //Имя фамилия
    let specializations                                     //Специализации

    let getDataForCalendarAPI = props.getDataForCalendarAPI     //Функция передает id мастера серверу
    let navigation = useNavigate()

    //Трансформируем массив специализаций в массив компанентов
    specializations = (arr=props.arrSpecialization)=>{
        return  arr.map(el=>{
            return (
                <div key={el.id} className="master-container_specialization">
                    {el.title}
                </div>
            )
        })
    }
    
    
    return (
        <div className="master-container" onClick={()=>{getDataForCalendarAPI(props.id); navigation('/reception/shedule')}}>
            {/* ИМЯ ФАМИЛИЯ */}
            <p>{FNandLN}</p>
            
            {/* СПЕЦИАЛИЗАЦИИ */}
            {specializations()}
        </div>
    )    
    
}

export default MasterBox;







