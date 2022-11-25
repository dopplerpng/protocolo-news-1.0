import Head from 'next/head'

import styles from '../styles/Home.module.css'
import Logo from '../assets/LogoProtocolo.png'
import Image from 'next/image'
import { FormEvent, useEffect, useState } from 'react'

import {api} from '../pages/api/axios'

export default function Home(props:string) {
  
  const [count, SetCount] = useState('')
  useEffect(()=>{
    api
    .get('/count')
    .then((response)=>SetCount(response.data))
    .catch((e)=>{return e})

  },[])

  const [email, SetEmail] = useState('')

  async function signNewsletter(event:FormEvent) {
    event.preventDefault()
    
    try{
      await api.post('/subscribed/newsletter', {
        email: email
      })
    }catch(e){
      return e
    }

    SetEmail('')
    
  }

  return (
      <div className='flex justify-center m-10 w-auto h-[auto]'>
        <div className='border-2 rounded border-black '>

          <Image alt='' className='mt-14 ml-10'  src={Logo}></Image>
        <div className='border-t-2  mt-14   '></div>

        <div className='w-full '>
          <h1 className=' text-pallet-redcons text-[1.8rem] ml-10 mt-6 mr-10 font-extrabold'>
            Saiba das principais notícias do cenário de Valorant, sem ter que pesquisar por elas!
          </h1>
          <p className=' text-pallet-redcons text-[1rem] ml-10 mt-2 mr-10 font-bold'>Leitores ativos: {count}</p>
        </div> 

        <div className='mt-7 '>
          
            <form onSubmit={signNewsletter} className="flex ml-10 mr-10 ">

                  <input
                    className="border  tracking-[.15rem] w-1/2  p-3   " 
                    type="email" 
                    placeholder="Seu melhor e-mail!" 
                    onChange={e=>{SetEmail(e.target.value)}}
                    value={email}
                    aria-label="E-mail completo."/>
                  <button className="p-2 ml-4 border text-pallet-third w-1/2 bg-pallet-primary hover:bg-pallet-transitionbutton active:bg-pallet-primary active:text-pallet-transitiontextbutton " type="submit">
                        Inscreva-se na Newsletter
                  </button>
              </form>
              <div className='ml-10 mt-4  w-auto' >
                <p className='text-[17px] text-pallet-redcons '>Receba notícias semanalmente dos principais acontecimentos no cenário de Valorant e fique por dentro das novidades que estão rolando na Lore!</p>
              </div>
              <div className=' flex justify-around	 w-full  mt-10 mb-5'>
                <p className='text-lg text-pallet-redcons'>Desenvolvido por Victor Cordeiro - <a className="text-lg hover:text-pallet-primary active:text-pallet-transitionbutton" href="https://github.com/dopplerpng">GitHub</a></p>

                <p className=' text-lg text-pallet-redcons'>Escrito por Laura Viana - <a className="text-lg hover:text-pallet-primary active:text-pallet-transitionbutton" href="https://www.linkedin.com/in/laurviana">Linkedin</a></p>

              </div>
                     
          
        </div>

          </div>
      </div>
   
  )
}
