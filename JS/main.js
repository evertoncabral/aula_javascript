var nome = 'Everton';
var idade = 31;

alert(`Bem vindo ${nome} você tem : ${idade} anos`);

var lista = ['pêssego', 'laranja', 'uva', 'goiaba'];
lista.push('melão amarelo'); // insere um determinado dado na última posição do array
console.log(lista)

console.log(lista.reverse()) // imprime na tela a ordem inversa dos elementos do array
lista.pop()  // retira o último elemento do array

console.log(lista.toString()) // converte  todo o array para string com uso de vírgula
console.log(lista.join(' | ')) //  converte  todo o array para string e utiliza o separador | 

//trabalhando com dicionário
var fruta = { nome: 'maçã', cor: 'vermelha' }
console.log(fruta)
console.log(fruta.nome)
console.log(fruta.cor)

// lista de dicionários

var frutas = [{ nome: 'maçã', cor: 'vermelho' } , { nome: 'uva', cor: 'roxo' }, { nome: 'limão', cor: 'verde' }]
console.log(frutas)
console.log(frutas[0].nome)
console.log(frutas[0].cor)


// trabalhando com datas 

var d = new Date();
alert(d)
alert(`Dia:${d.getDate()}`)
alert(`Mês:${d.getMonth()}`)
alert(`Ano:${d.getFullYear()}`)
alert(`Hora:${d.getHours()}`)
alert(`Minutos:${d.getMinutes()}`)
alert(`Segundos:${d.getSeconds()}`)


// Funções

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome) // alterando o nome a ser trocado
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));


