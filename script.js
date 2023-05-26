let horasInput = document.getElementById("horas");
let minutosInput = document.getElementById("minutos");
let segundosInput = document.getElementById("segundos");

const iniciarBtn = document.getElementById("iniciarBtn");
const pausarBtn = document.getElementById("pausarBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");

iniciarBtn.addEventListener("click", iniciarContagem);
pausarBtn.addEventListener("click", pausarContagem)
reiniciarBtn.addEventListener("click", reiniciarContagem)

let horas = 0;
let minutos = 0;
let segundos = 0;

let contagemDeSegundos;

function iniciarContagem(){
    contagemDeSegundos = setInterval( adicionarSegundos, 1000);
    iniciarBtn.disabled = true;
}

function pausarContagem(){
    clearInterval(contagemDeSegundos)
    iniciarBtn.disabled = false;
}

function reiniciarContagem(){
    horas = 0;
    minutos = 0;
    segundos = 0;

    horasInput.innerHTML = "0" + horas;
    minutosInput.innerHTML = "0" + minutos;
    segundosInput.innerHTML = "0" + segundos;
    iniciarBtn.disabled = false;
}

function adicionarSegundos(){
    segundos++;
    segundosInput.innerHTML = segundos < 10 ? "0" + segundos : segundos;
    if(segundos == 60){
        segundos = "0" + 0
        segundosInput.innerHTML = segundos;
        adicionarMinutos()
    }
}

function adicionarMinutos(){
    minutos++
    minutosInput.innerHTML = minutos < 10 ? "0" + minutos : minutos;
    if(minutos == 60){
        minutos = "0" + 0;
        minutosInput.innerHTML = minutos;
        adicionarHoras()
    }
}

function adicionarHoras(){
    horas++
    horasInput.innerHTML = horas < 10 ? "0" + horas : horas;
    if(horas == 24){
        clearInterval(contagemDeSegundos);
        alert("24 horas, um dia.")
        console.log(`
            CONQUISTA: UM DIA PERDIDO
            Parabéns, você ficou aqui por 24 horas...
            Cara... melhor você usar seu tempo com algo melhor.
        `)
    }
}