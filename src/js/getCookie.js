

// Принимает куки и ключ 
function getCookie(cookie, key) {
    let arrNum = []         // хранит номера символов ключа
    let a = 0               // счетчик
    let znach = ''          // тут будет значения по ключу
    // Перебираем строку циклом
    for(var i = 0; i< cookie.length; i++){
      // Ищем первую букву
      if(cookie[i] == key[a]){
        // добавляем букву в массив
        arrNum.push(i)
        a++
      }
    }
  
    // Перебираем строку от последнее число полученного массива +1
    for(let i = arrNum[arrNum.length-1]+2; i < cookie.length; i++){
      // Есле перебираемый символ ';' то выход
      if(i == ';'){
        break
      }
      znach = znach + cookie[i]
    }
  
    return znach
  }

  export default getCookie;