import React from "react";
import requestFunc from "../../../js/requestFunc";
import './Style.css'

//URLS
import { GET_DATA_SERVICES_URL } from "../../../js/Paths/Client";
import { SEND_ID_SERVICE_URL } from '../../../js/Paths/Client';

//КОМПАНЕНТЫ
import BtnBack from '../../Other/BtnBack'
import SpecializationBox from "./SpecializationBox";


class ChoiseServiceAPIContainer extends React.Component{

    componentDidMount(){
        ////Запрашиваем специализации с их услугами и передаем данные в состояние
        this.getSpecWithServAPI()
    }

    //Запрашиваем специализации с их услугами
    getSpecWithServAPI = async (SID=this.props.SID)=>{
        //Делаем запрос на сервер
        let serverAnswer = await requestFunc(GET_DATA_SERVICES_URL, SID)
        //Если данные пришли
        if(serverAnswer.data != undefined){
            //Передаем массив в состояние
            this.props.trSpecWithServAC(serverAnswer.data)
        }else{
            console.log('Данные с сервера не пришли')
        }
    }
    

    //Отправляем на сервер и в состояние id выбранной услуги
    sendIdServiceAPI = async(id)=>{
        //Отправляем id  в состоянеи
        this.props.trIdServeceAC(id)

        //Отправляем данные на сервер
        let serverAnswer = await requestFunc(SEND_ID_SERVICE_URL, id)
        //Если данные пришли
        if(serverAnswer.data != undefined){
            //Передаем данные в состояние
            this.props.trFreeDatesAC(serverAnswer.data)
        }else{
            console.log('Данные не пришли')
        }
       
    }


    //Трансформирует массив специализаций в компаненту
    transformArr(arr=this.props.specWithServ){
        return arr.map(el=>{
            return <SpecializationBox
                        key={el.id}
                        title={el.title}
                        arrService={el.arrServices}

                        sendIdServiceAPI={this.sendIdServiceAPI             /* отп. id услуги на сервер */}
                    />
        })
    }

    render(){
        //console.log(this.props)
        
        return(
            <>
                <BtnBack/>
                {/* ЗАГОЛОВОК */}
                <h1>Выберите услугу</h1>

                {/* СПИСОК СПЕЦИАЛИЗАЦИЙ С УСЛУГАМИ */}
                {this.transformArr()}
            </>
        )      
    }
}


export default ChoiseServiceAPIContainer;








