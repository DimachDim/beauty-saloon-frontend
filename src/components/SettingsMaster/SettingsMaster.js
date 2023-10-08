import React from "react";
import { useNavigate } from "react-router-dom";
import './Style.css'


let SettingsMaster = (props) => {
    //console.log(props)
    let nav = useNavigate();
    
    return (
        <div className="settings-master">
            <div className="setting-item" onClick={()=> nav('/settings-master/master-specialization')}>Настройка специализаций</div>
            <div className="setting-item" onClick={()=> nav('/settings-master/master-cervices')}>Настройка услуг</div>
        </div>
    )    
    
}

export default SettingsMaster;







