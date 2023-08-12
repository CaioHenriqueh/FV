const sucata_pesada = document.querySelector("#sucata_pesada")
const sucata_mista = document.querySelector("#sucata_mista")
const Aluminio = document.querySelector("#Aluminio")
const Cobre = document.querySelector("#Cobre")
const Metal = document.querySelector("#Metal")
const Ferro_Fundido = document.querySelector("#Ferro_Fundido")
const Ferro_Ruim = document.querySelector("#Ferro_Ruim")

const btn = document.querySelector("#btn")
const resultado = document.querySelector("#resultado")

btn.addEventListener("click" , () => {
    localStorage.setItem("sucata_pesada", parseFloat(sucata_pesada.value));
    localStorage.setItem("sucata_mista", parseFloat(sucata_mista.value));
    localStorage.setItem("Aluminio", parseFloat(Aluminio.value));
    localStorage.setItem("Cobre", parseFloat(Cobre.value));
    localStorage.setItem("Metal", parseFloat(Metal.value));
    localStorage.setItem("Ferro_Fundido", parseFloat(Ferro_Fundido.value));
    localStorage.setItem("Ferro_Ruim", parseFloat(Ferro_Ruim.value));

    
})
sucata_pesada.value = localStorage.getItem("sucata_pesada")
sucata_mista.value = localStorage.getItem("sucata_mista")
Aluminio.value = localStorage.getItem("Aluminio")
Cobre.value = localStorage.getItem("Cobre")
Metal.value = localStorage.getItem("Metal")
Ferro_Fundido.value = localStorage.getItem("Ferro_Fundido")
Ferro_Ruim.value = localStorage.getItem("Ferro_Ruim") 