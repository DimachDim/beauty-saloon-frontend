import React from "react";


let PresentDate = (props) => {
    //console.log(props)
    
    //Названия месяцов
    let arrMonthNames = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    
    let date = props.date.getDate()
    let month = arrMonthNames[ props.date.getMonth()]
    let year = props.date.getFullYear()
    

    return (
        <div className="date-plan_present-date">
            {date + '  ' + month + '  ' + year}
        </div>
    )    
    
}

export default PresentDate;







