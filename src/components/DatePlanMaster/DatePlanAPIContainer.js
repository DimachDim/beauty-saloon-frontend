import React from "react";

import requestFunc from "../../js/requestFunc";
//URLS
import { TRANSFER_TIME_URL } from "../../js/paths";
import { GET_DATA_DATE_URL } from "../../js/paths";
import { DEL_DATA_DATE_URL } from "../../js/paths";
import { GET_DATA_FORM_DATE_PLAN_URL } from "../../js/Paths/Master";

//КОМПАНЕНТЫ
import DatePlanMaster from "./Plan/DatePlanMaster";
import TimeContainer from "./Plan/TimeContainer";





class DatePlanAPIContainer extends React.Component{

    componentDidMount(){
        //Запрос данных для уже добавленного времени
        this.getDataDateAPI()

        //Запрос данных формы
        this.getDataFormAPI()

    }

    
    //Запрос всех данных за переданную дату. Принимает дату в вормате Date и сессию.
    getDataDateAPI = async (date=this.props.selectDate, SID=this.props.SID)=>{
        
        //Если в состоянии нет даты
        if(date == undefined){
            
            
        //Если есть дата
        }else{

            //Вы таскиваем данные из даты
            let dateLocal = date.getDate()          //Дата
            let month = date.getMonth()             //Месяц
            let year = date.getFullYear()           //Год
            
            //Отправляем данные на сервер
            let serverAnswer = await requestFunc(GET_DATA_DATE_URL, {year, month, dateLocal, SID})
            //Если данные пришли
            if(serverAnswer.data != undefined){
                //Передаем данные в состояние
                this.props.transferDataDate(serverAnswer.data)
            }
            console.log(serverAnswer.data)
            
        }
        
    }


    //Запрос данных длф формы
    getDataFormAPI = async(SID=this.props.SID)=>{
        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(GET_DATA_FORM_DATE_PLAN_URL, SID)
        
        //Есл данные пришли
        if(serverAnswer.data != undefined){
            //Обнавляем состаяние
            this.props.trDataFormDatePlanAC(serverAnswer.data)
        }else{
            console.log('Данные не пришли')
        }
    }


    //Обработка нажатия на удаления времени. Принимает id записи и сессию
    delTimeAPI = async(id, SID=this.props.SID)=>{

        //Отправляем данные на сервер
        await requestFunc(DEL_DATA_DATE_URL, {id, SID})
        //Запрашиваем новые данные и обнавляем состояние
        this.getDataDateAPI()
    }


    //Обработка клика "добавить время". Отправляет время на сервер
    clickAddTime = async (date, time, arrIdServices, SID=this.props.SID)=>{

        let day = date.getDay();                //День недели
        let dateLocal = date.getDate()          //Дата
        let month = date.getMonth()             //Месяц
        let year = date.getFullYear()           //Год

        //Отправляем на сервер
        await requestFunc(TRANSFER_TIME_URL, {time, day, dateLocal, month, year, arrIdServices, SID})
        //Обнавляем данные и состояние
        this.getDataDateAPI()
        
    }


    //Трансформирует массив с временем в массив компанентов
    transformTimeContainer(arrData=this.props.dataDate){

        return arrData.map(el => {
            //console.log(el)
            return <TimeContainer
                        key={el.id}
                        id={el.id}
                        time={el.time.substr(0,5)}
                        statys={el.statys}
                        //Для свободной записи
                        arrSrvices={el.arrSrvices}
                        //Для занятой записи
                        service={el.service}
                        client={el.client}

                        delTime={this.delTimeAPI            /* удаление времени */}

                    
                    />
        })
    }

    
    render(){
        console.log(this.props)
        
        return <DatePlanMaster
                    //Для обозначения даты
                    selectDate={this.props.selectDate                                   /* выбранная дата */}

                    //Для контейнера с временем
                    timeContainers={this.transformTimeContainer()    /* компаненты с вркменем */}

                    //Для формы
                    serveces={this.props.dataFormDatePlan           /* данные о доступных услугах */}
                    clickAddTime={this.clickAddTime                 /* обработка клика добавления времени */}

                />
    }
}


export default DatePlanAPIContainer;








