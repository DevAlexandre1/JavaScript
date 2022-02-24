
function Consultar(){

var hora = window.document.getElementById('hdia')
var hdia = window.document.getElementById('dia')
var htarde = window.document.getElementById('tarde')
var hnoite  = window.document.getElementById('noite')
var hordia = Number(hora.value)

if(hordia < 12){
    hdia.innerHTML=`Bom dia! são exatamente ${hordia} horas.`
    }else if(hordia >12 && hordia<19){
        htarde.innerHTML=`Boa tarde! são exatamente ${hordia} horas.`
    }else if(hordia > 18 && hordia <24){
        hnoite.innerHTML=`Boa noite! são exatamente ${hordia} horas.`
    }else{
        window.alert('Horário inexistente!')
                       
    }

}
