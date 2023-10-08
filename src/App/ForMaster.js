import React from "react";
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';

//Компаненты
import LogoutContainer from "../components/Autentification/Logout/LogoutContainer";
import ScheduleContainer from '../components/ScheduleMaster/ScheduleContainer'
import ProfileContainer from "../components/Profile/ProfileContainer";
import UsersContainer from "../components/Users/UsersContainer";
import DatePlanContainer from "../components/DatePlanMaster/DatePlanContainer";
import SettingsMaster from "../components/SettingsMaster/SettingsMaster";
import SpecializationContainer from "../components/SettingsMaster/1. MasterSpecialization/SpecializationContainer";
import ServecesContainer from "../components/SettingsMaster/2. MasterServeces/ServecesContainer";

let ForMaster = (props) => {
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
                        <li><NavLink className="navbar-btn" to='/profile-master'>Профиль мастера</NavLink></li>
                        <li><NavLink className="navbar-btn" to='/schedule'>Мое расписание</NavLink></li>
                        <li><NavLink className="navbar-btn" to='/users'>Другие пользователи</NavLink></li>

                        {/* НАСТРОЙКИ */}
                        <li><NavLink className="navbar-btn" to='/settings-master'>Настройки мастера</NavLink></li>
                        <li><NavLink className="navbar-btn" to='/settings'>Настройки</NavLink></li>

                        <li><NavLink className="navbar-btn" to='/exit'>Выйти</NavLink></li>
                        
                        
                        </ul>
                    </nav>
                    <button onClick={()=>clickShowNav()} ref={refBtnShow}>...</button>
                </div>
                <div className='content-container' ref={refContent}>
                    <Routes>
                        <Route path='/' element={<div>Главная</div>}/>

                        {/* ДЛЯ МАСТЕРА */}
                        <Route path='/schedule' element={<ScheduleContainer/>                   /* календарь расписания */}/>            
                        <Route path='/schedule/data-plan' element={<DatePlanContainer/>         /* открытая дата для мастера */}/>
                       
                        <Route path='/users' element={<UsersContainer/>}/>
                        {/* НАСТРОЙКИ МАСТЕРА*/}                        
                        <Route path='/settings-master' element={<SettingsMaster/>}/>
                        <Route path='/settings-master/master-specialization' element={<SpecializationContainer/>}/>
                        {<Route path='/settings-master/master-cervices' element={<ServecesContainer/>}/>}

                        {/* НАСТРОЙКИ */}
                        

                        <Route path='/exit' element={<LogoutContainer/>}/>
                    </Routes>
                </div>
            </Router>

            

        </div>
    )    
    
}

export default ForMaster;







