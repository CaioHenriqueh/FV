const sucata_pesada = document.querySelector("#sucata_pesada")
const sucata_mista = document.querySelector("#sucata_mista")
const Aluminio = document.querySelector("#Aluminio")
const Cobre = document.querySelector("#Cobre")
const Metal = document.querySelector("#Metal")
const Ferro_Fundido = document.querySelector("#Ferro_Fundido")
const Ferro_Ruim = document.querySelector("#Ferro_Ruim")
const btn = document.querySelector("#liveToastBtn")
const resultado = document.querySelector("#resultado")
const Valor = document.querySelector(".toast-body");
const dinheiro = document.querySelector("#red");








btn.addEventListener("click", () => {

    const valor_1 = sucata_pesada.value * localStorage.getItem("sucata_pesada");


    const valor_2 = sucata_mista.value * localStorage.getItem("sucata_mista")


    const valor_3 = Aluminio.value * localStorage.getItem("Aluminio")


    const valor_4 = Cobre.value * localStorage.getItem("Cobre")


    const valor_5 = Ferro_Fundido.value * localStorage.getItem("Ferro_Fundido")


   


       


     if(sucata_pesada.value === ''){
      sucata_pesada.value = 0 
     }
     if(sucata_mista.value === ''){
       sucata_mista.value = 0 
     }
     if(Aluminio.value  === ''){
       Aluminio.value  = 0 
     }
     if(Cobre.value === ''){
       Cobre.value = 0 
     }
     if(Metal.value === ''){
       Metal.value = 0 
     }
     if(Ferro_Fundido.value === ''){
       Ferro_Fundido.value = 0 
     }
     if(Ferro_Ruim.value === ''){
       Ferro_Ruim.value = 0 
     }
    


    const valor_6 = Ferro_Ruim.value * localStorage.getItem("Ferro_Ruim")


    const valor_8 = Metal.value * localStorage.getItem("Metal")

    
    let pagar = valor_1 + valor_2 + valor_3 + valor_4 + valor_5 + valor_6 + valor_8;
    
     console.log(valor_2)

    localStorage.setItem("pagar", pagar);

    const total = localStorage.getItem("pagar")

    Valor.innerHTML = `O valor a ser pago é R$ ${total}`

})

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
