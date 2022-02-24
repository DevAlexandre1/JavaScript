
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
        tab.innerHTML=''
        while( c <= 10){
            let item =  document.createElement('option') //Criando o elemeto de opções
            item.text = `${c} x ${numx} = ${c*numx}`//Parte de dentro do option
            item.value=`tab${c}` //identifica o valor da tabela selecionada dentro de cada valor option. exemplo 10x3 esta na tabeça tab3 do resultado
            tab.appendChild(item)
            c++
            document.getElementById('txtnum').value ="";
        }       
    }else if(num1.value.length != 0){
        let numz = Number(num1.value)
        let d = 1
        tab1.innerHTML=''
        while( d <= 10){
            let item1 =  document.createElement('option')
            item1.text = `${numz} / ${d} = ${numz/d}`
            item1.value=`tab${d}`
            tab1.appendChild(item1)
            d++
            document.getElementById('txtnum1').value ="";
        }       
        
    }else if(num2.value.length != 0){
        let numh = Number(num2.value)
        let e = 1
        tab2.innerHTML=''
        while( e <= 10){
            let item2 =  document.createElement('option')
            item2.text = `${e} + ${numh} = ${e+numh}`
            item2.value=`tab${e}`
            tab2.appendChild(item2)
            e++
            document.getElementById('txtnum2').value ="";
        }
    }else if(num3.value.length != 0){
        let numz = Number(num3.value)
        let f = 1
        tab3.innerHTML=''
        while( f <= 10){
            let item3 =  document.createElement('option')
            item3.text = `${numz} - ${f} = ${numz- f}`
            item3.value=`tab${d}`
            tab3.appendChild(item3)
            f++            
            document.getElementById('txtnum3').value ="";
        } 
}else
    window.alert(`Informe um numero`)
}

/* function limpar(){
  item.innerHTML='';
  item1.innerHTML='';
  item2.innerHTML='';
  item3.innerHTML='';

}  */
