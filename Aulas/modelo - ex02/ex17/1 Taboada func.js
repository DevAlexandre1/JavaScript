
function verificar(){

let num = window.document.getElementById('txtnum')
let tab = window.document.getElementById('seltab')

let num1 = window.document.getElementById('txtnum1')
let tab1 = window.document.getElementById('seltab1')

let num2 = window.document.getElementById('txtnum2')
let tab2 = window.document.getElementById('seltab2')

let num3 = window.document.getElementById('txtnum3')
let tab3 = window.document.getElementById('seltab3')


    if(num.value.length == 0){
        window.alert(`Informe um numero`)
    }else{
        let numx = Number(num.value)
        let c = 1
        while( c <= 10){
            let item =  document.createElement('option')//Criando o elemeto de opções
            item.text = `${c} x ${numx} = ${c*numx}`
            tab.appendChild(item)
            c++
        }

    }

}
