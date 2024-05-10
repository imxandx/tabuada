function tabuada(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0) { // se o input estiver vazio, vai aparecer este alerta em seguida
        alert('Por favor, digite um número!')
    }else {
        var n = Number(num.value) // essa variável quer dizer que a variável n, vai receber o valor que foi digitado
        var c = 1 
        tab.innerHTML = '' // isto é, antes de começar mostrar uma ou outra tabuada, ele limpa a área

        while(c <= 10) { // lê-se: enquanto contador for menor ou igual a 10
            var item = document.createElement('option') // criou elemento option de maneira dinâmica
            item.text = `${n} x ${c} = ${n*c}` // na parte de dentro do option vai aparecer um texto; um número vezes um número, é igual a...(n*c) -> quer dizer que vai fazer a multiplicação dos números e mostrar automaticamente
            item.value = `tab${c}` 
            tab.appendChild(item) // vai adicionar um elemento filho, que no caso é o (item) -> option 
            c++
        }
    }
}