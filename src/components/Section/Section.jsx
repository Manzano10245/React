
//se importa el useState para cambiar el estado 
import {useState} from 'react'
import {ListaSedes} from '../ListaSedes/ListaSedes'
import './Section.css';

//Se importan las imagenes
import persona1Img from'../../assets/persona1.png'
import persona2Img from'../../assets/persona2.png'
import persona3Img from'../../assets/persona3.png'

//Se crea la estructura para cada gerente de cada sede con su propio id, name, sede e imagen 
const sedes =[
    {
        id:1,
        name: 'Juan',
        sede:'Sede 1',
        image: persona1Img
    },
    {
        id:2,
        name: 'Nestor',
        sede:'Sede 2',
        image: persona2Img
    },
     {
        id:3,
        name: 'Arnulfo',
        sede:'Sede 3',
        image: persona3Img
    }

];


export const Section = () => {

    const [ count, setCount] = useState(0)

    console.log(count)

    // const handleClick=()=>{
    //     setCount(count + 1);
    // }


    // const handleClick=(name)=>{
    //     alert(`Esta conectado a ${name}`)
    // }

return (

    <section>
        {

            //Se utiliza el map para que recorra cada una de la estructura que se creo en el metodo de sedes
            sedes.map((sede)=>{
                return(
                    <ListaSedes key={sede.id} fruit={sede}/>
                )
            })
        
    } 

    </section>
    

                
    )

}