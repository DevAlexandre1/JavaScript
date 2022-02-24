    let txtin = document.getElementById('txtentrada')
    let lista = document.querySelector('select#flist')
    let res = document.querySelector('div#res')
    let vet = []    
   
    function isNumero(n){
        if(Number(n)>0 && Number(n)< 101){
            return true
        }else{
            return false
        }
    }
    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        }else {
            return false
        }
    }
    function adicionar(){
        if(isNumero(txtin.value) && !inLista(txtin.value, vet)){ // o ! na frente do inLista significa NÃO, que não tem na lista.
            vet.push(Number(txtin.value))
            let item = document.createElement('option')
            item.text = `Valor ${txtin.value} adicionado`
            lista.appendChild(item)
            res.innerHTML = ''//Limpa o resultado

        }else {
            window.alert('Valor inválido ou já adicionado')
        }
        txtin.value = '' //Limpa a caixa de adicionar
        txtin.focus()  //Coloca a barra de adicionar piscando
    }
    function finalizar(){
        if(vet.length == 0 ){ //Se o vetor for vazio, exibir a mensagem abaixo
            window.alert('Adicione valores antes de finalizar')
        }else{
            let tot = vet.length  //Contando o tamamnho do vetor para informar em resultado.
            let maior = vet[0]
            let menor = vet[0]
            let soma = 0
            let media = 0

            for(let pos in vet){
                soma += vet[pos] // soma todos valores encontrados no vetor 
                if(vet[pos] > maior) //Percorre o vetor procurando o valor maior que a variavel "maior", quando encontrado adiciona o valor a variavel maior
                    maior = vet[pos]
                if(vet[pos] < menor)//Percorre o vetor procurando valor menor que o que esta em "menor", qunado encontrado adiciona o valor menor a variável
                menor = vet[pos]
            }
            media= soma / tot  // pegando o valor da soma e dividindo pelo total de posições do vetor

            res.innerHTML = '' // Limpa o resultado para adicionar apenas uma linha
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
            res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
            res.innerHTML += `<p>A soma de todos valores informado foi ${soma}.</p>`
            res.innerHTML += `<p>A media de todos valores informado foi ${media}.</p>`

        }
    }





