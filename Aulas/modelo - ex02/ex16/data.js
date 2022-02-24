
function contador(){

var ini = window.document.getElementById('txtini')
var inix = Number(ini.value)
var fim = window.document.getElementById('txtfim')
var fimx = Number(fim.value)
var pas = window.document.getElementById('txtpas')
var pasx = Number(pas.value)
var res = window.document.querySelector('div#res')


if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
    window.alert('[Erro], Impossível contar')
    }else if(inix < fimx){
        res.innerHTML = `<strong>Contando:</strong>`
        while(inix < fimx){            
            res.innerHTML += `<br> \u{1F449} ${inix}`//Colocando emoji na programação   o SINAL de + antes do igual concatena os dados.
            inix = inix + pasx
        }   
     }else{
    res.innerHTML = `Contando:`
        while(inix > fimx){
            res.innerHTML += `<br> \u{1F449} ${inix}`//Colocando emoji na programação   o SINAL de + antes do igual concatena os dados.
            inix = inix - pasx
        } 
    }
    res.innerHTML += `<br>\u{1F3C1}`
    res.innerHTML += `\u{1F3C1}`
    res.innerHTML += `\u{1F3C1}`
}
