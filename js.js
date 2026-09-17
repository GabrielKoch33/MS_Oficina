let btvoltar = document.getElementById("btvoltar")
let btavancar = document.getElementById("btavancar")
let imgvoltar = document.getElementById("imgvoltar")
let imgavancar = document.getElementById("imgavancar")

let imagem_original_voltar = "imagens_ms/seta_esquerda_png.png"
let imagem_original_avancar = "imagens_ms/seta_direita_png.png"
let imagem_original_voltar_hover = "imagens_ms/esquerda_hover.png"
let imagem_original_avancar_hover = "imagens_ms/direita_hover.png"

btvoltar.addEventListener("mouseover", function(){
    imgvoltar.src = imagem_original_voltar_hover
})
btvoltar.addEventListener("mouseout", function(){
    imgvoltar.src = imagem_original_voltar
})
btavancar.addEventListener("mouseover", function(){
    imgavancar.src = imagem_original_avancar_hover
})
btavancar.addEventListener("mouseout", function(){
    imgavancar.src = imagem_original_avancar
})

let servicos = [
    {
        nome: "Transtora",
        imagem: "imagens_ms/transtora_2.jpg",
        descricao: "Carroceria Transtora, utilizada no transporte pesado de madeiras. Entregue com qualidade e robustez"
    },
    {
        nome: "Prancha",
        imagem: "imagens_ms/prancha.jpg",
        descricao: "Prancha enviada a cliente em São Paulo, comporta até 22 toneladas, ideal para pesos-pesados."
    },
    {
        nome: "Prancha Agrícola",
        imagem: "imagens_ms/agricola.jpg",
        descricao: "Para quem busca um transporte seguro, e que aguente o trabalho, essa Prancha Agricula é para você! - Registro de Cliente em Goiás"
    }
]
let nomeServico = document.querySelector(".container_servico h3");
let imgServico = document.querySelector("#imagem_servico img");
let descServico = document.querySelector("#descricao_servico p");

let i = 0

function avancarservico(){
    nomeServico.textContent = servicos[i].nome
    imgServico.src = servicos[i].imagem
    descServico.textContent = servicos[i].descricao
}

btavancar.addEventListener("click", () =>{
    i++
    if (i==servicos.length){
        i=0
    }
    avancarservico()
})
btvoltar.addEventListener("click", () => {
    i--
    if (i<0){
        i = servicos.length-1
    }
    avancarservico()
})

document.getElementById("btnTopo").addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });