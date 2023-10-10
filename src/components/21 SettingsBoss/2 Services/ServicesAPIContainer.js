import React from "react";
import requestFunc from "../../../js/requestFunc";
//URLS
import { GET_SERVICES_URL } from "../../../Paths/boss/BossSetting";
import { ADD_SERVICE_URL } from "../../../Paths/boss/BossSetting";
import { DEL_SERVICE_URL } from "../../../Paths/boss/BossSetting";

//КОМПАНЕНТЫ
import Specialization from "./Specialization";
import BtnBack from '../../Other/BtnBack'




class ServicesAPIContainer extends React.Component{

    componentDidMount = async() =>{
        //Получаем данные и обнавляем состояние
        await this.getServicesAPI()
        //Совмещаем два полученных массива и обнавляем состояние
        await this.combinationArrs()
    }


    //Получение всех специализаций и относящихся к ним услуг
    getServicesAPI = async(SID=this.props.SID)=>{

        //Делаем запрос на сервер и сохраняем ответ
        let serverAnswer = await requestFunc(GET_SERVICES_URL, SID)
        //Передаем в состояние специализации и услуги
        this.props.transferDataSpecializationAC(serverAnswer.dataSpec)
        this.props.transDataServicesAC(serverAnswer.dataService)
        
    }
    
    
    //Совмещение массивов
    combinationArrs = async(arrSpec=this.props.specializations, arrService=this.props.services)=>{
        

        //Перебираем масссив специализаций
        for(let i=0; i<arrSpec.length; i++){

            //Добавляем в него массив который будет хранить услуги
            arrSpec[i].services = new Array();

            //Перебираем массив с услугами
            for(let n=0; n<arrService.length; n++ ){

                //Если id специализации равно id масива первого уровня
                if(arrService[n].specialization_id == arrSpec[i].id){

                    //Добавляем сервисы специализации объект
                    arrSpec[i].services.push(arrService[n])

                    
                    
                }
                
            }
        }

        
        //Обнавляем в состоянии массив специализаций
        this.props.transDataSpecServicessAC(arrSpec)
    }


    //Трансформирует массив в компаненту
    transformArr(arr){

        //console.log(arr)
        return arr.map(el => {
            
            return  <Specialization 
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        services={el.services}

                        clickAddService={this.clickAddServiceAPI            /* добавление услуги */}
                        clickDelService={this.clickDelServiceAPI            /* удаление услуги */}
                    />
        })
    }


    //Клик на добавление новой услуги
    clickAddServiceAPI = async (inp, id, SID=this.props.SID)=>{

        //Вытаскиваем содержимое
        let title = inp.current.value

        //Если поле не пустое
        if(title != ''){

            //Отправляем данные на сервер
            await requestFunc(ADD_SERVICE_URL, {title, id, SID})
            //Обнавляем данные и состояние
            this.componentDidMount()
            //Очищаем поле
            inp.current.value = ''
        }
    }


    //Клик на удаление услуги
    clickDelServiceAPI = async (id, SID=this.props.SID)=>{
        
        //Отправляем данные на сервер
        await requestFunc(DEL_SERVICE_URL, {id, SID})
        //Запрашиваем новые данные и обнавляем  состояние
        this.componentDidMount()
    }


    render(){
        //console.log(this.props)
        
        return(
            <>
                {/* НАЗАД */}
                <BtnBack/>

                {/* ЗАГОЛОВОК */}
                <h1>Создайте услуги для специализаций</h1>

                {/* СПЕЦИАЛИЗАЦИИ */}
                {this.transformArr(this.props.specWithServices)}
            </>
        )      
    }
}


export default ServicesAPIContainer;








