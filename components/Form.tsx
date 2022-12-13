import { useState } from "react"
import axios from 'axios'

export default function Form(){

    const [email, setEmail] = useState('')

    async function subscribe (event: { preventDefault: () => void }) {
        event.preventDefault()
        console.log('opa')
        try{
            await axios.get('api/addsubscribe')
        }catch(error){
            console.error(error)
        }
        
        
    }

    return(
    <>
    <form className="flex " action="https://gmail.us8.list-manage.com/subscribe/post?u=0b108e402652dad14db9e9234&amp;id=d8461c44cb&amp;f_id=00366ae0f0" method="post">

       
        <button className="p-2  border text-pallet-third w-1/2 md:w-full bg-pallet-primary hover:bg-pallet-transitionbutton active:bg-pallet-primary active:text-pallet-transitiontextbutton font-black	 " type="submit" value='' name="subscribe">
            Inscreva-se na Newsletter
        </button>
    </form>
    <div className='mt-4 ' >
        <p className='mb-4  text-pallet-redcons '>Receba notícias semanalmente dos principais acontecimentos no cenário de Valorant e fique por dentro das novidades que estão rolando na Lore!</p>
    </div>
    </>
    )
}