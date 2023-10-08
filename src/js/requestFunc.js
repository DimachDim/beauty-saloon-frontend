

let requestFunc = async(url, obj)=>{
    //console.log('lox')

    
    return await fetch(url, {
        method: 'POST',                                             // Метод
        headers: {
            'Content-Type': 'application/json;charset=utf-8'        //Шапка
        },
        body: JSON.stringify(obj)                                   //Передаем тело. преобразуем объект в JSON
    })  .then(resp => resp.json())
        .then(json => json );  
    
}

export default requestFunc;