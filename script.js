
// Inputs
function calcular(){
    const xiInputs = document.getElementsByName("xi[]");
    const fiInputs = document.getElementsByName("fi[]");

    let Xi = [];
    let Fi = [];

    for (let i = 0; i < xiInputs.length; i++) {
        let xi = parseFloat(xiInputs[i].value) || 0;
        let fi = parseFloat(fiInputs[i].value) || 0;

        Xi.push(xi);
        Fi.push(fi);
    }
    console.log("Xi:", Xi);
    console.log("Fi:", Fi);




    // Controles
    XiFi = 0
    N = 0

    let X = 0
    //

    // Calculos Media e Arredondamento
    for(let five of Xi){
        XiFi = XiFi + (Xi[X] * Fi[X])
        N += (Fi[X])
        X = X + 1

    }

    MediaPadrao = (XiFi / N)
    MediaArredondada = MediaPadrao.toFixed(2);






    //Mediana   (?)

    let resultado = [];
    for (let i = 0; i < Xi.length; i++) {
        for (let j = 0; j < Fi[i]; j++) {
            resultado.push(Xi[i])
        }
    }

    let ordenado = resultado.sort((a, b) => a - b)
    let tamanho = ordenado.length
    let meio = tamanho / 2

    let mediana

    if (tamanho % 2 === 0) {
    let meio1 = ordenado[meio - 1]
    let meio2 = ordenado[meio]
    mediana = (meio1 + meio2) / 2
    } else {
    mediana = ordenado[Math.floor(meio)];
    }





    //Moda  (?)

    function detectarModa(Xi, Fi) {
        const maxFreq = Math.max(...Fi);

        // Se todas as frequências forem iguais, não há moda
        const todasIguais = Fi.every(f => f === Fi[0]);
        if (todasIguais) {
            return "Sem moda";
        }

        // Filtra os valores de Xi que têm frequência máxima
        const modas = Xi.filter((X, i) => Fi[i] === maxFreq);

        if (modas.length === 1) {
            return `Unimodal: Moda = ${modas[0]}`;
        } else if (modas.length === 2) {
            return `Bimodal: Modas = ${modas.join(" e ")}`;
        } else if (modas.length === 3) {
            return `Trimodal: Modas = ${modas.join(", ")}`;
        } else {
            return `Multimodal (${modas.length} modas): ${modas.join(", ")}`;
        }
    }
    let Moda = detectarModa(Xi, Fi)


    //Variancia (s²)
    s = 0
    X = 0
    t = 0
    for(let five of Xi){
        s =  parseFloat((((Xi[X] - (MediaArredondada)) ** 2) *  Fi[X]).toFixed(2))
        t = t + s 
        X = X + 1
        console.log(s)
    }    
    Variancia = (t / (N - 1))
    VarianciaArredondada = Variancia.toFixed(2);
    //DesvioPadrao

    DesvioPadrao = Math.sqrt(VarianciaArredondada)
    DesvioArredondado = DesvioPadrao.toFixed(2)


    //CoeficienteDeVariacao


    Coeficiente = (100 * DesvioArredondado) / MediaArredondada
    CoeficienteArredondado = Coeficiente.toFixed(2) + "%"



















    //Saida de Dados
 
    if (checkboxtodos.checked){
        document.getElementById("ResultadoMedia").innerText = MediaArredondada;
        document.getElementById("ResultadoMediana").innerText = mediana;
        document.getElementById("ResultadoModa").innerText = Moda;
        document.getElementById("ResultadoVariancia").innerText = VarianciaArredondada;
        document.getElementById("ResultadoDesvioPadrao").innerText = DesvioArredondado ;
        document.getElementById("CoeficienteDeVariacao").innerText = CoeficienteArredondado ;
    }


    if (checkboxmedia.checked){
        document.getElementById("ResultadoMedia").innerText = MediaArredondada;
    }
    if (!checkboxmedia.checked && !checkboxtodos.checked){
        document.getElementById("ResultadoMedia").innerText = "Calculo não solicitado";
    }



    if (checkboxmediana.checked){
        document.getElementById("ResultadoMediana").innerText = mediana;
    }
    if (!checkboxmediana.checked && !checkboxtodos.checked){
        document.getElementById("ResultadoMediana").innerText = "Calculo não solicitado";
    }


    if (checkboxmoda.checked){
        document.getElementById("ResultadoModa").innerText = Moda;
    }
    if (!checkboxmoda.checked && !checkboxtodos.checked){
        document.getElementById("ResultadoModa").innerText = "Calculo não solicitado";
    }


    if (checkboxvariancia.checked){
        document.getElementById("ResultadoVariancia").innerText = VarianciaArredondada;
    }
    if (!checkboxvariancia.checked && !checkboxtodos.checked){
        document.getElementById("ResultadoVariancia").innerText = "Calculo não solicitado";
    }



    if (checkboxdesvio.checked){
        document.getElementById("ResultadoDesvioPadrao").innerText = DesvioArredondado ;
    }
    if (!checkboxdesvio.checked && !checkboxtodos.checked){
        document.getElementById("ResultadoDesvioPadrao").innerText = "Calculo não solicitado";
    }



    if (checkboxcoeficiente.checked){
        document.getElementById("CoeficienteDeVariacao").innerText = CoeficienteArredondado ;
    }
    if (!checkboxcoeficiente.checked && !checkboxtodos.checked){
        document.getElementById("CoeficienteDeVariacao").innerText = "Calculo não solicitado";
    }
    
    
    


}




//

// Botão
let botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    //take()
    calcular()
})
//

// Consertar
function AjustarValor(x1){
    let casoVirgula = x1.replace(",", ".")
    let casoTipagem = parseFloat(casoVirgula)
    if(casoTipagem == NaN){
        casoTipagem = 0
    }
    return CasoTipagem
}





// Adicionar Xi e Fi
document.getElementById("add-btn").addEventListener("click", function () {
    const container = document.getElementById("painel-xi");

    const novoXi = document.createElement("div");
    novoXi.className = "inputs-xi";
    novoXi.innerHTML = `
    <input type="number" name="xi[]">
    `;
    container.appendChild(novoXi);
});

document.getElementById("add-btn").addEventListener("click", function () {
    const container = document.getElementById("painel-fi");

    const novoFi = document.createElement("div");
    novoFi.className = "inputs-fi";
    novoFi.innerHTML = `
    <input type="number" name="fi[]">
    `;
    container.appendChild(novoFi);
});


// Puxar CheckBox

let checkboxmedia = document.getElementById('Media');
let checkboxmediana = document.getElementById('Mediana');
let checkboxmoda = document.getElementById('Moda');
let checkboxvariancia = document.getElementById('Variancia');
let checkboxdesvio = document.getElementById('Desvio');
let checkboxcoeficiente = document.getElementById('Coeficiente');
let checkboxtodos = document.getElementById('Todos');

document.getElementById("remove-btn").addEventListener("click", function () {
    const containerXi = document.getElementById("painel-xi");
    const containerFi = document.getElementById("painel-fi");

    // Verifica se há elementos para remover
    if (containerXi.children.length > 0 && containerFi.children.length > 0) {
        containerXi.removeChild(containerXi.lastChild);
        containerFi.removeChild(containerFi.lastChild);
    }
});