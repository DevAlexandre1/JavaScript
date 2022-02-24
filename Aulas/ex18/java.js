function adicionar(){
    let ntxt = window.document.getElementById('txtnum')
    let n = Number(ntxt.value)
    let res = window.document.getElementById('res')

 
    res.innerHTML = `o numero digitado foi ${n}`    

 
}