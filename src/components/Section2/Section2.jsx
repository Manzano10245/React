
//se importa el useState para cambiar el estado 

import {useState} from 'react'
import {ProductoCard} from '../ProductoCard/ProductoCard'
import './Section2.css';


//Se importan las imagenes

import producto1Img from'../../assets/producto1.png'
import producto2Img from'../../assets/producto2.png'
import producto3Img from'../../assets/producto3.png'
import producto4Img from'../../assets/producto4.png'
import producto5Img from'../../assets/producto5.png'

//Se crea la estructura para cada gerente de cada sede con su propio id, name, description e image 
const productos =[
    {
        id:1,
        name: 'Taladro',
        description:'$400.000',
        image: producto1Img
    },
    {
        id:2,
        name: 'Destornillador de pala',
        description:'$30.000',
        image: producto2Img
    },
     {
        id:3,
        name: 'Cerrucho',
        description:'$35.000',
        image: producto3Img
    },
     {
        id:4,
        name: 'Kit Casco y Gafas de proteccion V',
        description:'$150.000',
        image: producto4Img
    },
     {
        id:5,
        name: 'Caja de Tornillos punta de broca',
        description:'$40.000',
        image: producto5Img
    }

];
export const Section2 = () => {

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
                        //Se utiliza el map para que recorra cada una de la estructura que se creo en el metodo de productos

            productos.map((producto)=>{
                return(
                    <ProductoCard key={producto.id} producto={producto}/>
                )
            })
        
    } 

    </section>
    

                
    )

}