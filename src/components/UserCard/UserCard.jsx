import { useState } from 'react'

export const UserCard = ({fruit}) => {

    const [isContacted , setIsContacted] = useState(false)


    const{id,name,description,image}=fruit

const handleClick=()=>{

    setIsContacted(!isContacted);

}

console.log(`tajetas de ${name} fue renderizada`)
    return (
        <div className='card'>
                        <img className='image' src={image} alt={name} />
                        <h2 className='name'>{name}</h2>
                        <p className='description'>{description}</p>
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

