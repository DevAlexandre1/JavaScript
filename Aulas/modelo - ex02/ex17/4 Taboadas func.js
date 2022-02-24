
function verificar(){

let num = window.document.getElementById('txtnum')
let tab = window.document.getElementById('seltab')

let num1 = window.document.getElementById('txtnum1')
let tab1 = window.document.getElementById('seltab1')

let num2 = window.document.getElementById('txtnum2')
let tab2 = window.document.getElementById('seltab2')

let num3 = window.document.getElementById('txtnum3')
let tab3 = window.document.getElementById('seltab3')

 if(num.value.length != 0){
        let numx = Number(num.value)
        let c = 1
        while( c <= 10){
            let item =  document.createElement('option')//Criando o elemeto de opções
            item.text = `${c} x ${numx} = ${c*numx}`
            tab.appendChild(item)
            c++
        }       
    }else if(num1.value.length != 0){
        let numz = Number(num1.value)
        let d = 1
        while( d <= 10){
            let item1 =  document.createElement('option')
            item1.text = `${numz} / ${d} = ${numz/d}`
            tab1.appendChild(item1)
            d++
        }       
        
    }else if(num2.value.length != 0){
        let numh = Number(num2.value)
        let e = 1
        while( e <= 10){
            let item2 =  document.createElement('option')
            item2.text = `${e} + ${numh} = ${e+numh}`
            tab2.appendChild(item2)
            e++
        }
    }else if(num3.value.length != 0){
        let numz = Number(num3.value)
        let f = 1
        while( f <= 10){
            let item3 =  document.createElement('option')
            item3.text = `${numz} - ${f} = ${numz- f}`
            tab3.appendChild(item3)
            f++
        } 
}else
    window.alert(`Informe um numero`)
}
function limpar(){

document.getElementById('txtnum').value ="";
document.getElementById('txtnum1').value ="";
document.getElementById('txtnum2').value ="";
document.getElementById('txtnum3').value ="";
}