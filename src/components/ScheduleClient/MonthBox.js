import React from "react";
import './Schedule.css'



let MonthBox = (props) => {
    //console.log(props)
    
    //Названия месяцов
    let monthName = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    
    //Названия дней недели
    let dayName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

    //Преобразование в компаненты
    let days = dayName.map(el => {
        return <div key={Math.random()} className='day-container'>{el}</div>
    })

    return (
        <div className="month-box-container">
            
            {/* МЕСЯЦ */}
            <div className="month-box-container_month-name">
                {monthName[props.month] + ' ' + props.year}
            </div>
            
            {/* ДНИ НЕДЕЛИ */}
            <div className="days-container">
                {days}
            </div>

            {/* ДАТЫ */}
            <div className="dates-container">
                {props.dates}
            </div>

        </div>
    )    
    
}

export default MonthBox;







