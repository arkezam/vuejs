import axios from 'axios';


// url api de giphy

const url = 'http://web.electropuno.com.pe/OficinaVirtualV2/';
export const apikey = '10020014499'



fetch (url).then(resp => resp.json() ).then(resp=> console.log(resp))


const gitapi = axios.create({
    baseURL:url,
    params: {
        codigo: apikey,
    } 
})

gitapi.get('verReciboExt.aspx').then(resp=>{
    
    const {datos} = resp.data
    const {monto} = datos.tabla1
    console.log(monto)

})