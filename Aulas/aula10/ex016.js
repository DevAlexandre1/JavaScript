var horas = 8
var datas = new Date()
var semana = datas.getDay()

console.log(`São exatamente ${horas} horas`)
if(horas < 12){
    console.log(`Bom dia!`)
    }else if(horas <=18 && horas > 12) {
        console.log('Boa tarde')
        }else if(horas > 18 && horas < 25){
        console.log('Boa noite')
    }else{
    console.log('Horário inexistente!')
    }


switch(semana){
    case 0:
        console.log(`Domingo!`)
        break
     case 1:
        console.log(`Segunda!`)
        break
     case 2:
        console.log(`Terça!`)
        break
    case 3:
        console.log(`Quarta!`)
        break
    case 4:
        console.log(`Quinta!`)
        break
     case 5:
        console.log(`Sexta!`)
        break
     case 6:
        console.log(`Sabado`)
        break    
     default:
         console.log(`Dia inválido`)
        break
}

