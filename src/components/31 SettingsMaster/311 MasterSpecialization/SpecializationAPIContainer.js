import React from "react";
import requestFunc from '../../../js/requestFunc'


//URLS
import { GET_SPECIALIZATION_MASTER_URL } from "../../../Paths/master/SettingMaster";
import { CHENGE_SPECIALIZATION_MASTER_URL } from "../../../Paths/master/SettingMaster";

//КОМПАНЕНТЫ
import BtnBack from '../../Other/BtnBack'



class SpecializationAPIContainer extends React.Component{

    componentDidMount(){
        this.getSpecializationMasterAPI()        
        
    }

    

    
    //Получение специализаций для мастера от сервера
    getSpecializationMasterAPI = async (SID = this.props.SID) =>{
        
        //Делаем запрос на сервер
        let serverAnswer = await requestFunc(GET_SPECIALIZATION_MASTER_URL, SID)
        //Отправляем массив в состояние
        this.props.transferDataSpecializationAC(serverAnswer.data)
        
    }


    //Обработка нажатия на чекбокс
    changeChecboxAPI = async (id, SID = this.props.SID)=>{

        // Отправляем данные на сервер
        await requestFunc(CHENGE_SPECIALIZATION_MASTER_URL, {id, SID})
        // Делаем запрос на сервер и обнавляем состояние
        await this.getSpecializationMasterAPI()
    }
    

    //Трансформирует массив специализаций в массив компанентов
    transformArr(arr=this.props.specializations){

        return arr.map(el => {
            return (
                <div key={el.id} className='settings-master_spec-container'>
     
                    {!el.flag 
                        ?
                            <input 
                                onChange={() => {this.changeChecboxAPI(el.id)}}
                                className="inp-checbox-specialization"
                                type='checkbox' 
                                value={el.title}
                            />
                        
                        :
                            <input 
                                onChange={() => {this.changeChecboxAPI(el.id)}}
                                className="inp-checbox-specialization"
                                type='checkbox' 
                                value={el.title}
                                defaultChecked
                            />
                    }
                    <span >{el.title}</span> <br/>
                </div>
                
                
            )
        })
    }
    

    render(){
        //console.log(this.props)
        

        return(
            <>
                {/* КНОПКА НАЗАД */}
                <BtnBack/>

                {/* ЗАГОЛОВОК */}
               <h1>Выберите свою специализацию</h1>

                {/* СПИСОК СПЕЦИАЛИЗАЦИЙ */}
                {this.transformArr()}
                
                
                
            </>
        )      
    }
}


export default SpecializationAPIContainer;








