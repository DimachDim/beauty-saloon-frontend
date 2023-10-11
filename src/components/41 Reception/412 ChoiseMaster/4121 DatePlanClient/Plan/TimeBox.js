import React from "react";
import './Style.css';

let TimeBox = (props) => {
    console.log(props)
    

    let btnAppointment                  //Кнопка записаться либо отменить
    let status = props.status           //Статус
    let classStyle                      //Стиль для контейнера
    let arrServices = props.arrServices //Массив возможных услуг
    let selectService = props.selectService //Выбранная услуга
    let blockService                    //Блок с услугами
    
    
    //Проверяем кто указан клиентом
    switch(props.client){

        //Если текущий пользователь
        case 'you':{
            //Меняем статус
            status = 'Вы записаны'
            //Меняем стиль
            classStyle = 'time-box-client-you'
            //Меняем блок с услугой
            blockService = 
                <div className="service-container">
                    <div>
                        {selectService.title}
                    </div>
                    <div>
                        {selectService.price} руб.
                    </div>
                    <button onClick={()=>props.clickCancelApointmentAPI(props.id)}>Отменить запись</button>
                </div>
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
            //Меняем стиль
            classStyle = 'time-box-client-free'
            //Меняе блок услуги
            blockService = arrServices.map(el=>{
                return (
                    <div key={el.id} className="service-container">
                        {/* НАЗВАНИЕ */}
                        <div>{el.title}</div>
                        {/* ЦЕНА */}
                        <div>{el.price} руб.</div>
                        {/* КНОПКА */}
                        <button onClick={()=>{props.clickAppointmentAPI(props.id, el.id)}}>Записаться</button>
                    </div>
                )
            })
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

            {/* УСЛУГА/УСЛУГИ ЦЕНА */}
            <div className={classStyle}>
                {blockService}
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







