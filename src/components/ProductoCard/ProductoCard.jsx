
//Se importa el useState para cambiar el estado del boton 

import { useState } from 'react'


//se hace una funcion flecha para instanciar las variables y hacer uso del useState

export const ProductoCard = ({producto}) => {

    const [isContacted , setIsContacted] = useState(false)


    const{id,name,description,image}=producto

const handleClick=()=>{

    setIsContacted(!isContacted);

}

console.log(`tajetas de ${name} fue renderizada`)
    return (
        //Estructura de cada tarjeta que recorre una por una por medio del map

        <div className='card'>
                        <img className='image' src={image} alt={name} />
                        <h2 className='name'>{name}</h2>
                        <p className='description'>{description}</p>
                        <button id={id} onClick={()=> handleClick()}>
                            {
                                isContacted ? 'Comprado' : 'Comprar'
                            }
                        </button>
                 
                         {isContacted && (
                            <p className="contact-message">
                            Has comprado: <strong>{name}</strong>.
                            </p>
      )}
                    </div>
    )
}

