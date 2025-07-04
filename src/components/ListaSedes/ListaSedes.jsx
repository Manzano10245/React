
//Se importa el useState para cambiar el estado del boton 
import { useState } from 'react'


//se hace una funcion flecha para instanciar las variables y hacer uso del useState
export const ListaSedes = ({fruit}) => {

    const [isContacted , setIsContacted] = useState(false)


    const{id,name,sede,image}=fruit

const handleClick=()=>{

    setIsContacted(!isContacted);

}

console.log(`tajetas de ${name} fue renderizada`)

//Estructura de cada tarjeta que recorre una por una por medio del map
    return (
        <div className='card'>
                        <img className='image' src={image} alt={name} />
                        <h2 className='name'>{name}</h2>
                        <p className='description'>{sede}</p>
                        <button id={id} onClick={()=> handleClick()}>
                            {
                                isContacted ? 'Contactado' : 'Contactar'
                            }
                        </button>
                 
                         {isContacted && (
                            <p className="contact-message">
                            Has contactado a <strong>{name}</strong>.
                            </p>
      )}
                    </div>
    )
}

