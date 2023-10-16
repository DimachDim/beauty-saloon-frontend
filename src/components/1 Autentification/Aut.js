import React from "react";
import {BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';

import Login from "./Login";
import Registration from "./Registration";


let Aut = (props) => {
    
    let textError = props.textError
    let loginAPI = props.loginAPI
    let registrationAPI = props.registrationAPI
    let textErrorAC = props.textErrorAC
    


    
    return (
        <div className="aut-container">
            <Router>
                <div className="btn-container">
                    <NavLink  to='/'>Вход</NavLink>
                    <NavLink  to='/reg'>Регистрация</NavLink>  
                </div>




                <div className="aut-form">
                    <Routes>
                        <Route path='/' element={
                            <Login 
                                textError={textError} 
                                loginAPI={loginAPI} 
                                textErrorAC={textErrorAC}
                            />}/>

                        <Route path='/reg' element={
                            <Registration 
                                textError={textError} 
                                registrationAPI={registrationAPI} 
                                textErrorAC={textErrorAC}
                            />}/>
                    </Routes>
                </div>
            </Router>
        </div>
    )    
    
}

export default Aut;







