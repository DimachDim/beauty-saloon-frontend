import React from "react";




let Logout = (props) => {
    //console.log(props)
    

    
    return (
        <div className="logout-container">
            <h3>Покинуть учетную запись?</h3>

            <button onClick={() => { props.clickLogout();} }>Выйти</button>

        </div>
    )    
    
}

export default Logout;







