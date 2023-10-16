import React from "react";
import requestFunc from "../../../../js/requestFunc";


//URLS
import { GET_DATA_FOR_DATE_URL } from "../../../../Paths/client/Reseption";
import { SEND_DATA_APPOINTMENT_URL } from "../../../../Paths/client/Reseption";
import { SEND_DATA_CANCEL_APPOINTMENT_URL } from "../../../../Paths/client/Reseption";

//КОМПАНЕНТЫ
import BtnBack from "../../../Other/BtnBack";
import PresentDate from "./Plan/PresentDate";
import HeadTable from '../../../Other/HeadTable'    
import Navigation from "../../../Other/Navigation";
import TimeBox from "./Plan/TimeBox";



class DatePlanAPIContainer extends React.Component{

    componentDidMount(){

        //Если есть данные
        if(this.props.selectDate != undefined){
            this.getDataForDateAPI()
        }
    }

    
    //Запрашиваем данные на сервере
    getDataForDateAPI = async(fullDate=this.props.selectDate, id=this.props.idSelectServ, SID=this.props.SID)=>{

        //Вытаскиваем данные
        let date = fullDate.getDate()
        let month = fullDate.getMonth()
        let year = fullDate.getFullYear()
        
        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(GET_DATA_FOR_DATE_URL,{date, month, year, id, SID})
        //Если данные пришли
        if(serverAnswer.data!=undefined){
            //Передаем данные в состояние
            this.props.trDataDateAC(serverAnswer.data)
        }else{
            console.log('Данные не пришли')
        }
        
    }
    

    //Нажатие на кнопку записаться. Принимает (id записи в расписании, id услуги, сессия) 
    clickAppointmentAPI = async(idSchedule, idService, SID=this.props.SID)=>{
        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(SEND_DATA_APPOINTMENT_URL, {idSchedule, idService, SID})
        //Обнавляем данные
        this.getDataForDateAPI()       
    }


    //Нажатие отменить запись.(id расписания, сессия)
    clickCancelAppointmentAPI = async(idSchedule, SID=this.props.SID)=>{
        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(SEND_DATA_CANCEL_APPOINTMENT_URL, {idSchedule, SID})
        //Обнавляем данные
        this.getDataForDateAPI() 
    }
    
    //Трансформирует массив в компаненты
    transformArr(arr=this.props.arrDataDate){
        return arr.map(el=>{
            //console.log(el)
            return (
                <TimeBox 
                    key={el.idSchedule}
                    id={el.idSchedule}
                    time={el.time.substr(0,5)}
                    status={el.status}
                    service={el.service}
                    client={el.client}
                    master={el.master}

                    clickAppointmentAPI={this.clickAppointmentAPI               /* записаться */}
                    clickCancelAppointmentAPI={this.clickCancelAppointmentAPI   /* отменить запись */}
                />
            )
        })
    }

    render(){
        //console.log(this.props)
        
        //Проверяем есть ли данные в состоянии
        switch(true){


            //ДАННЫЕ ЕСТЬ
            case this.props.selectDate != undefined:{
                return (
                    <>  
                        {/* КНОПКА НАЗАД */}
                        <BtnBack/>
        
                        {/* ДАТА */}
                        <PresentDate date={this.props.selectDate}/>
        
                        {/* ШАПКА ТАБЛИЦЫ */}
                        <HeadTable
                            arrNames={['Время', 'Статус', 'Услуга', 'Стоимость', 'Записаться/Отменить', 'Мастер']}
                            arrGridTemplateColumns={['0.5fr','0.5fr','0.5fr','0.5fr','1fr','1fr']}
                            childrenStyle={'time-box'}
                            headStyle={'head-table-time-box'}
                        >
                            {this.transformArr()}
                        </HeadTable>
                    </>
                )
            }


            //ДАННЫХ НЕТ
            case this.props.selectDate == undefined:{
                //Перенаправляем на выбор услуги
                return (
                    <>
                        <Navigation path={'/reception'}/>
                    </>
                )
            }
        }

        
        
    }
}


export default DatePlanAPIContainer;








