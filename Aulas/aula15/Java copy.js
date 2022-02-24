function teste(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    } 
}
    let res = teste(223)//chamando o método e mostrando na tela 
    console.log(res)
    console.log(teste(223))//chamando o metodo e mostrando na tela mais simpes
    console.log('##################################################')



function soma(n1=0,n2=0){ //Caso na chamada do metodo não for informado algum parametro para a variável, o valor dela segue como 0;
    return n1 + n2
}
console.log(soma(7,5))
console.log('##################################################')
console.log('Não informando um atributo no metodo')
console.log(soma(3))

