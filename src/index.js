import axios from "axios";


const heros = [
    {
        id: 1,
        nombre: "Aquaman",
        bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
        owner: "DC"
    },
    {
        id: 2,
        nombre: "Batman",
        bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
        owner: "DC"
    },
    {
        id: 3,
        nombre: "Daredevil",
        bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
        owner: "Marvel"
    }
];



const url = 'http://web.electropuno.com.pe/wsServicioConsultaComercial/Clientes.svc/ConsultaClientePorSuminstro/';
export const apikey = '0020014499'

// fetch (url+apikey).then(resp => resp.json() ).then(resp=> console.log(resp))


const gitapi = axios.create({
    baseURL:url,
 
})

gitapi.get(apikey).then(resp=>{
    
    const {wsConsultaClientePorSuminstroResult} = resp.data
    
    const contenido = JSON.parse(wsConsultaClientePorSuminstroResult)

    const {Monto} = contenido.Table[0]

    console.log(Monto)

})