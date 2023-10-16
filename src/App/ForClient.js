import React from "react";
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';


//Компаненты
import ProfileContainer from "../components/12 Profile/ProfileContainer";
import ReceptionContainer from '../components/41 Reception/ReceptionContainer';
import ChoiseServiceContainer from '../components/41 Reception/411 ChoiseService/ChoiseServiceContainer'
import ScheduleContainer from "../components/42 ScheduleClient/ScheduleContainer";
import DatePlanContainerService from "../components/41 Reception/411 ChoiseService/4111 DatePlanClient/DatePlanContainer";
import ChoiseMasterContainer from "../components/41 Reception/412 ChoiseMaster/ChoiseMasterContainer";
import DatePlanContainerMaster from "../components/41 Reception/412 ChoiseMaster/4121 DatePlanClient/DatePlanContainer";
import LogoutContainer from "../components/1 Autentification/11 Logout/LogoutContainer";

let ForClient = (props) => {
    //console.log(props)
    
    let refNav = React.createRef()          //Ссылка на навигацию
    let refBtnShow = React.createRef()      //Ссылка на кнопку показать
    let refContent = React.createRef()      //Ссылка на контент

    function clickShowNav(){

        //Проверяем показана навигация или нет
        switch(refNav.current.style.marginLeft){
            //Задвинуть
            case '0px':{
                refNav.current.style.marginLeft = '-200px'
                refContent.current.style.marginLeft = '0px'
                refBtnShow.current.style.marginLeft = '0px'
                break    
            }
            
            //Выдвинуть
            default:{
                refNav.current.style.marginLeft = '0px'               
                refBtnShow.current.style.marginLeft = '150px'
                break  
            }
            
        }
    }


    return (
        <div className="app-container">
      
            <Router>
                <div className='navbar-container'>
                    <nav ref={refNav}>
                        <ProfileContainer/>
                        <ul>
                            <li><NavLink className="navbar-btn" to='/'>Главная</NavLink></li>
                            <li><NavLink className="navbar-btn" to='/reception'>Записаться</NavLink></li>
                            <li><NavLink className="navbar-btn" to='/exit'>Выйти</NavLink></li>
                        
                        </ul>
                    </nav>
                    <button onClick={()=>clickShowNav()} ref={refBtnShow}>...</button>
                </div>
                <div className='content-container' ref={refContent}>
                    <Routes>
                        <Route path='/' element={<div>Главная</div>}/>

                        {/* ЗАПИСАТЬСЯ */}
                        <Route path='/reception' element={<ReceptionContainer/>                     /* выбор ветки */}/>
                        {/* выбор услуги */}      
                        <Route path='/reception/choise-service' element={<ChoiseServiceContainer/>  /* выбор услуги */}/>
                        <Route path='/reception/shedule' element={<ScheduleContainer/>              /* расписание */}/>
                        <Route path='/reception/shedule/service-data-plan-client' element={<DatePlanContainerService/> /* дата план */}/>
                        {/* выбор мастера */}
                        <Route path='/reception/choise-master' element={<ChoiseMasterContainer/>    /* выбор мастера */}/>
                        <Route path='/reception/shedule/master-data-plan-client' element={<DatePlanContainerMaster/> /* дата план */}/>

                        <Route path='/exit' element={<LogoutContainer/>}/>
                    </Routes>
                </div>
            </Router>

        </div>
    )    
    
}

export default ForClient;







