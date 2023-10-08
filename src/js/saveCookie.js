export  default function saveCookie(key, cookie, expires){
    // ПРИНИМАЕТ ключ в виде строки, его значение, срок хранения в днях
  
  
    // Создаем дату для указания времени хранения куки
    let now = new Date()                        //получаем текущую дату
    let time = now.getTime()                    //преобразуем в милисикунды
    let expireTime = time + 1000*60*60*24*expires      //прибавляем месяц
    now.setTime(expireTime)                     //преобразуем в форматы даты
    let nowString = now.toUTCString()           //преобразуем в датовую строку
  
    //Сохраняем в куки
    document.cookie = key + '=' + cookie + ';' + 'expires=' + nowString;
  }