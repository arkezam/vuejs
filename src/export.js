


//array de objetos de heroes
const heroes = [
    {
        nombre: "Aquaman",
        id: 1,
        poder: "Bueno"
    },
    {
        nombre: "Batman",
        id: 2,
        poder: "Dinero"
    },
    {
        nombre: "Superman",
        id: 3,
        poder: "Superpoderes"
    }
];

const {nombre, id, poder} = heroes;

const create = (persona)=>{
    return {
        id: heroes.id,
        nombre: persona.nombre,
        poder: persona.poder

    }
}


console.log(create("asdf"));




const persona = [{
    id: 1,
    nombre: "Juan",
    apellido: "Perez"
},
{
    id: 2,
    nombre: "Pedro",
    apellido: "Perez"
},
]


const crearPersona = ({id,nombre,apellido}) => {
    return {
        id,
        nombre,
        apellido
    }
}




console.log(crearPersona(persona[0]));


//importar heros
import {buscarHeroe} from "../src/heros";


console.log(buscarHeroe(2))








