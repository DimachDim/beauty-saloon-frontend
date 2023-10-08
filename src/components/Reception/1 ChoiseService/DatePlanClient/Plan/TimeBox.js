import React from "react";
import './Style.css';

let TimeBox = (props) => {
    //console.log()
    

    let btnAppointment                  //Кнопка записаться либо отменить
    let status = props.status           //Статус
    let classStyle                      //Стиль для контейнера
    
    
    //Проверяем кто указан клиентом
    switch(props.client){

        //Если текущий пользователь
        case 'you':{
            //Меняем кнопку
            btnAppointment = 
                <button onClick={()=>props.clickCancelAppointmentAPI(props.id)} className='btn-apointment'>
                    Отменить запись
                </button>
            //Меняем статус
            status = 'Вы записаны'
            //Меняем стиль
            classStyle = 'time-box-client-you'
            break
        }

        //Если не текущий пользователь
        case 'not you':{
            //Меняем стиль
            classStyle = 'time-box-client-not-you'
            break
        }

        //Если клиент не указан
        default:{
            //Меняем кнопку
            btnAppointment = 
                <button onClick={()=>props.clickAppointmentAPI(props.id, props.service.id)} className='btn-apointment'>
                    Записаться
                </button>
            //Меняем стиль
            classStyle = 'time-box-client-free'
            break    
        }

    }

    return (
        <>
            {/* ВРЕМЯ */}
            <div className={classStyle}>
                {props.time}
            </div>

            {/* СТАТУС */}
            <div className={classStyle}>
                {status}
            </div>

            {/* УСЛУГА */}
            <div className={classStyle}>
                {props.service.title}
            </div>

            {/* СТОИМОСТЬ */}
            <div className={classStyle}>
                {props.service.price} руб.
            </div>

            {/* КНОПКА ЗАПИСЬ/ОТМЕНА */}
            <div className={classStyle}>
                {btnAppointment}
            </div>

            {/* МАСТЕР */}
            <div className={classStyle}>
                {props.master.name}<br/>
                {props.master.lastName}<br/>
                {props.master.phone}
            </div>
        </>
    )    
    
}

export default TimeBox;







