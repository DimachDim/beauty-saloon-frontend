import React from "react";

import requestFunc from "../../js/requestFunc";

//URLS
import { GET_USERS_URL } from "../../Paths/Users";
import { DEL_USER_URL } from "../../Paths/Users";
import { MASTER_USER_URL } from "../../Paths/Users";

//КОМПАНЕНТЫ
import UserBox from "./UserBox";



class UsersAPIContainer extends React.Component{

    componentDidMount(){
        this.getUsers()
    }

    //Функция получает пользователей и существующие статусы с сервера и передает их в состояние
    getUsers = async (SID = this.props.SID)=>{
        //Делаем запрос на сервер
        let serverAnswer = await requestFunc(GET_USERS_URL, SID)
        //Передаем пользователей в состояние
        this.props.getUsersAC(serverAnswer.users)
        //Передает список статусов в состояние
        this.props.getStatusesAC(serverAnswer.statuses)

        //console.log(serverAnswer)
    }


    //Трансформирует переданный массив в массив компанентов
    arrTransform(arrUsers, arrStatuses){

        return arrUsers.map(el => {

            //Вычисляем статус
            let status
            
            for(let i=0; i<arrStatuses.length; i++){
                if(el.status == arrStatuses[i].id){
                    status = arrStatuses[i].status_name
                    break
                }
            }

            return  <UserBox
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        lastName={el.lastName}
                        phone={el.phone}
                        status={status }

                        user={this.props.user           /* данные текущего пользователя */}
                        
                        clickMaster={this.clickMaster           /* назначение мастером */}
                        clickDeleteUser={this.clickDeleteUser   /* удаление пользователя */}
                    />
                    
        })
    }
    
    //Кнопка назначения мастером
    clickMaster = async (id, SID=this.props.SID)=>{
        //Делаем запрос на сервер
        await requestFunc(MASTER_USER_URL, {id, SID})
        //Запрашиваем новый список пользователей и передаем в состояние
        this.getUsers()
    }

    //Обрабатывает удаление пользователя. Принимает сессию и id пользователя
    clickDeleteUser = async (id, SID=this.props.SID)=>{
        //Делаем запрос на сервер для удаления
        let serverAnswer = await requestFunc(DEL_USER_URL, {id, SID})
        //Делаем запрос на сервер для запроса нового списка и передаем в состояние
        this.getUsers()
    }

    render(){
        //console.log(this.props)
        
        return(
            <div>
               Пользователи
               {this.arrTransform(this.props.users, this.props.statuses)}
            </div>
        )      
    }
}


export default UsersAPIContainer;








