import React from "react";
import requestFunc from "../../../js/requestFunc";

//URLS
import { GET_LIST_MASTERS_URL } from "../../../js/Paths/Client";
import { GET_DATA_FOR_CALENDAR_URL } from "../../../js/Paths/Client";

//КОМПАНЕНТЫ
import MasterBox from "./MasterBox";



class ChoiseMasterAPIContainer extends React.Component{

    componentDidMount(){
        this.getListMastersAPI()
    }

    //Запрашиваем данные с сервера
    getListMastersAPI = async ()=>{
        //Делаем запрос на сервер
        let serverAnswer = await requestFunc(GET_LIST_MASTERS_URL)
        //Если данные пришли
        if(serverAnswer.data != undefined){
            //Отправляем данные в состояние
            this.props.trDataMastersAC(serverAnswer.data)
        }else{
            console.log('Данные о мастерах не пришли')
        }
    }


    //Получить данные для календаря для указанного мастера. (id мастера, текущая дата)
    getDataForCalendarAPI = async (idMaster, nowDate=new Date())=>{
        //Вытаскиваем текущую дату
        let year = nowDate.getFullYear()
        let month = nowDate.getMonth()
        let date = nowDate.getDate()

        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(GET_DATA_FOR_CALENDAR_URL, {idMaster, year, month, date})
        //Если данные пришли
        if(serverAnswer.data != undefined){
            //Отправляем данные в состояние
            this.props.trDataForCalendarAC(serverAnswer.data)
            //Отправляем в состояние id мастера
            this.props.trIdServeceAC(idMaster)
        }else{
            console.log("Данные не пришли")
        }
    }
    

    //Трансформируем массив с данными о мастерах в массив компанентов
    transformArrMasters(arr=this.props.arrDataMasters){
        return arr.map(el=>{
            return (
                <MasterBox
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    lastName={el.lastName}
                    arrSpecialization={el.arrSpecialization}

                    getDataForCalendarAPI={this.getDataForCalendarAPI}
                />
            )
        })
    }

    render(){
        //console.log(this.props)
        
        return(
            <>
                {/* ЗАГОЛОВОК */}
                <h1>Выберите мастера</h1>
               
                {/* СПИСОК МАСТЕРОВ */}
                <div className="masters-container">
                    {this.transformArrMasters()}
                </div>
            </>
        )      
    }
}


export default ChoiseMasterAPIContainer;








