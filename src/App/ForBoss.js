import React from "react";
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';

//Компаненты
import LogoutContainer from "../components/1 Autentification/11 Logout/LogoutContainer";
import ProfileContainer from "../components/12 Profile/ProfileContainer";
import UsersContainer from "../components/13 Users/UsersContainer";

import SettingsBoss from "../components/21 SettingsBoss/SettingsBoss";
import SpecializationsContainer from "../components/21 SettingsBoss/211 Specializations/SpecializationsContainer";
import ServicesContainer from "../components/21 SettingsBoss/212 Services/ServicesContainer";


let ForBoss = (props) => {
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
                        <li><NavLink className="navbar-btn" to='/users'>Другие пользователи</NavLink></li>

                        {/* НАСТРОЙКИ */}
                        <li><NavLink className="navbar-btn" to='/settings-boss'>Расширенные настройки</NavLink></li>
                        <li><NavLink className="navbar-btn" to='/settings'>Настройки</NavLink></li>

                        <li><NavLink className="navbar-btn" to='/exit'>Выйти</NavLink></li>
                        
                        
                        </ul>
                    </nav>
                    <button onClick={()=>clickShowNav()} ref={refBtnShow}>...</button>
                </div>
                <div className='content-container' ref={refContent}>
                    <Routes>
                        <Route path='/' element={<div>Главная</div>}/>

                        <Route path='/users' element={<UsersContainer/>}/>       

                        {/* РАСШИРЕННЫЕ НАСТРОЙКИ */}                
                        <Route path='/settings-boss' element={<SettingsBoss/>}/>
                        <Route path='/settings-boss/specializations' element={<SpecializationsContainer/>       /* специализации */}/>    
                        <Route path='/settings-boss/services' element={<ServicesContainer/>       /* услуги */}/>

                        <Route path='/exit' element={<LogoutContainer/>}/>
                    </Routes>
                </div>
            </Router>

            

        </div>
    )    
    
}

export default ForBoss;







