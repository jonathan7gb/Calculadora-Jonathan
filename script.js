// TROCAR TEMA

const btnTrocarTema = document.getElementById("tema")
const body = document.body
const calculadora = document.getElementById("calculadora")
const painelResultado = document.getElementById("painelResultado")

if(localStorage.getItem("Tema", "Escuro")){
    body.classList.add('temaEscuro')
    calculadora.classList.add('temaClaro')
    painelResultado.classList.add('temaClaro')
}

btnTrocarTema.addEventListener('click', () => {
    body.classList.toggle('temaEscuro')
    calculadora.classList.toggle('temaClaro')
    painelResultado.classList.toggle('temaClaro')
    
    if(body.classList.contains("temaEscuro")){
        localStorage.setItem("Tema", "Escuro")
    }else{
        localStorage.setItem("Tema", "Claro")
    }

})


// ======================================================
// FUNCIONAMENTO DA CALCULADORA

const resultadoTexto = document.getElementById("resultadoTexto")
const numeros = document.querySelectorAll(".numero")
const operacoes = document.querySelectorAll(".operacao")
const btnRestaurar = document.getElementById("Restaurar")
const btnSubmit = document.getElementById("Submit")
const btnExcluirNum = document.getElementById("ExcluirNum")
let valorAtual = ""


numeros.forEach(numero => {
    numero.addEventListener('click', () => {

        valorAtual += numero.dataset.valor
        resultadoTexto.innerText = valorAtual
    })
})

operacoes.forEach(operacao => {
    operacao.addEventListener('click', () => {
        valorAtual += operacao.dataset.valor
        resultadoTexto.innerText = valorAtual
    })
})

btnRestaurar.addEventListener('click', () => {
    resultadoTexto.innerText = "0"
    valorAtual = ""
})

btnExcluirNum.addEventListener('click', () => {
    valorAtual = valorAtual.slice(0, -1)
    resultadoTexto.innerText = valorAtual
})


btnSubmit.addEventListener('click', () => {
    valorAtual = eval(valorAtual)
    resultadoTexto.innerText = valorAtual
})
