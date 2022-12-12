import { useState } from "react"
import axios from 'axios'

export default function Form(){

    const [email, setEmail] = useState('')

    async function subscribe () {
        
        console.log('opa')
        try{
            const response = await axios.post('api/subscribe',{email})
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }

    return(
    <>
    <form className="flex " onSubmit={subscribe}>

        <input
            className="border w-full md:w-1/2 p-3" 
            type="email" 
            id="email-input"
            name="email"
            placeholder="Seu melhor e-mail!" 
            required
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            autoCapitalize='off'
            autoCorrect='off'
            aria-label="E-mail completo."/>
        <button className="p-2 ml-4 border text-pallet-third w-full md:w-1/2 bg-pallet-primary hover:bg-pallet-transitionbutton active:bg-pallet-primary active:text-pallet-transitiontextbutton font-black	 " type="submit" value='' name="subscribe">
            Inscreva-se na Newsletter
        </button>
    </form>
    <div className='mt-4 ' >
        <p className='mb-4  text-pallet-redcons '>Receba notícias semanalmente dos principais acontecimentos no cenário de Valorant e fique por dentro das novidades que estão rolando na Lore!</p>
    </div>
    </>
    )
}