import React from "react";
import { useNavigate } from "react-router-dom";
import './Schedule.css'



let DatehBox = (props) => {
    //console.log(props.branch)
    
    

    let flagFree = props.flagFree       //Смотрит свободность даты
    let changingClass = ''              //Будет хранить класс
    let gridStart                       //Если первое число то будет указана позиция для старта
    let fullData = props.fullData       //Переданная дата
    let nowDate = new Date()            //Текущая дата 
    let branch = props.branch           //Ветка выбора

    
  

    //Навигация
    let navigator = useNavigate()       
    //Функция клика по дате
    let clickDate = ()=>{
        navigator(`/reception/shedule/${branch}-data-plan-client`); 
        props.transferInfoDateAC(props.fullData)
    }           

    //Смотрим на флаг занятости
    switch(true){
        //Если дата свободна
        case flagFree == true:{
            changingClass = 'free-date'
            break
        }
        //Если дата не имеет свободных окон
        case flagFree == false:{
            changingClass = 'busy-date'
            break
        }
        //В остальных случаях
        default:{
            changingClass = ''
        }
    }


    //Если дата уже прошла
    if(fullData.getDate()<nowDate.getDate() && fullData.getMonth()<=nowDate.getMonth() && fullData.getFullYear()<=nowDate.getFullYear()){
        //Меняем класс
        changingClass = 'past-date'
        //Меняем функцию при нажатии
        clickDate = ()=>{}
    }
    
    //Указываем первому числу стартовую позицию
    if(fullData.getDate() == 1){
        if(props.fullData.getDay() == 0){
            gridStart = 7           
        }else{
            gridStart = props.fullData.getDay()
        }
    }


    return (
        <div 
            className={`date-container-client ${changingClass}`} 
            style={{gridColumnStart: gridStart}}
            onClick={()=>clickDate()}
        >

            {/* ДАТА */}      
            {fullData.getDate()}
        </div>
    )    
    
}

export default DatehBox;







