import React from "react";
import requestFunc from '../../../js/requestFunc'

//URLS
import { GET_DATA_FOR_SETTING_SERVICES_URL } from "../../../js/Paths/Master";
import { SEND_DATA_ADD_SERVICES_URL } from "../../../js/Paths/Master";
import { SEND_DATA_DEL_SERVICES_URL } from "../../../js/Paths/Master";

//КОМПАНЕНТЫ
import BtnBack from '../../Other/BtnBack'
import SpecializationBox from "./SpecializationBox";



class ServecesAPIContainer extends React.Component{

    componentDidMount(){
        this.getDataForSettingServicesAPI()
    }


    //Запрос информации для настройки услуг
    getDataForSettingServicesAPI = async(SID=this.props.SID)=>{

        //Делаем запрос на сервер
        let serwerAnswer = await requestFunc(GET_DATA_FOR_SETTING_SERVICES_URL, SID)

        //Если пришел массив данных
        if(serwerAnswer.data != undefined){
            //Передаем данные в состояние
            this.props.trDataForSetingServiceAC(serwerAnswer.data)
        }
        //console.log(serwerAnswer.data)

    }
    

    //Добавление услуги для мастера
    addSrviceForMasterAPI = async (id, price, SID=this.props.SID)=>{
        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(SEND_DATA_ADD_SERVICES_URL, {id,price, SID})
        //Запрашиваем данные и обнавляем состояние
        this.getDataForSettingServicesAPI()
    }


    //Удаление услуги у мастера
    delSrviceForMasterAPI = async (id, SID=this.props.SID) =>{
        //Отправка данных на сервер
        let serverAnswer = await requestFunc(SEND_DATA_DEL_SERVICES_URL, {id, SID})
        //Запрашиваем новые данные и обнавляем состояние
        this.getDataForSettingServicesAPI()
    }

    
    //Трансформирует массив данных в массив компанентов
    transformArr(arr=this.props.dataForSetingServices){
        return arr.map(el => {
            //console.log(el)
            return <SpecializationBox
                        key={el.id}
                        //Для специализыции
                        idSpec={el.id}
                        titleSpec={el.title}

                        //Для списка выбранных специализаций
                        arrSelectServeces={el.arrSelectServeces}

                        delSrviceForMasterAPI={this.delSrviceForMasterAPI}

                        //Для формы
                        arrAvailabelServeces={el.arrAvailabelServeces}

                        addSrviceForMasterAPI={this.addSrviceForMasterAPI           /* добавление услуги */}
                    />
        })
    }

    render(){
        //console.log(this.props)
        
        return(
            <>
                {/* КНОПКА НАЗАД */}
                <BtnBack/>

                {/* ЗЗАГОЛОВОК */}
                <h1>Выберите услуги</h1>

                {/* СПИСКО СПЕЦИАЛИЗАЦИЙ С УСЛУГАМИ */}
                {this.transformArr()}
            </>
        )      
    }
}


export default ServecesAPIContainer;








