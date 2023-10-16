import React from "react";
import './Time.css'

let TimeContainer = (props) => {
    //console.log(props)
    

    //Смотрим статус записи
    switch(true){
        
        //Если запись СВОБОДНА
        case (props.client == undefined): {
    
            //Трансформирует массив услуг
            let transfArrServices = (arr = props.arrSrvices) =>{
                return arr.map(el=>{
                    return (
                        <div key={Math.random()} className='service-and-price'>
                            <div>
                                {el.title}
                            </div>
                            <div>
                                {el.price + ' руб.'}
                            </div>
                        </div>
                    )
                })
            }
       
            return  (
                <>
                    {/* ВРЕМЯ */}
                    <div className="time-conteiner-master-time">
                        {props.time}
                    </div>

                    {/* УСЛУГИ И ИХ ЦЕНЫ */}
                    <div className="time-conteiner-master-services">
                        {transfArrServices()}    
                    </div>

                    {/* СТАТУС */}
                    <div className="time-conteiner-master-statys">
                        {props.statys}
                    </div>

                    {/* КЛИЕНТ */}
                    <div className="time-conteiner-master-client">

                    </div>

                    {/* КНОПКА УДАЛИТЬ */}
                    <button onClick={()=>props.delTime(props.id)}>X</button>
                </>
            )
        }

        //Если запись ЗАНЯТА
        case (props.client != undefined): {
    
            return  (
                <>
                    {/* ВРЕМЯ */}
                    <div className="time-conteiner-master-time">
                        {props.time}
                    </div>

                    {/* УСЛУГИ И ИХ ЦЕНЫ */}
                    <div className="time-conteiner-master-services">
                        {props.service.title}
                    </div>


                    {/* СТАТУС */}
                    <div className="time-conteiner-master-statys">
                        {props.statys}
                    </div>

                    {/* КЛИЕНТ */}
                    <div className="time-conteiner-master-client">
                        <p>
                            {props.client.name} <br/>
                            {props.client.lastName}<br/>
                            <a>{props.client.phone}</a>
                        </p>
                    </div>

                    {/* КНОПКА УДАЛИТЬ */}
                    <button onClick={()=>props.delTime(props.id)}>X</button>
                </>
            )
        }
    }  
}

export default TimeContainer;







