import React from "react";
import { useNavigate } from "react-router-dom";
import './Settings.css'


let SettingsBoss = (props) => {
    //console.log(props)
    
    let nav = useNavigate();
    
    return (
        <>
            <div className="setting-item" onClick={()=> nav('/settings-boss/specializations')}>Настройка специализаций</div>
            <div className="setting-item" onClick={()=> nav('/settings-boss/services')}>Перечень услуг</div>
                
        </>
    )    
    
}

export default SettingsBoss;







