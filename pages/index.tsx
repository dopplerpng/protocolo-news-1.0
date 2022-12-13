


import Logo from '../assets/LogoProtocolo.png'
import Image from 'next/image'
import Form from '../components/Form'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home(){
  

  return (
    <Layout>
      
        <Image alt='' src={Logo}></Image>
        <Header/>
        <Form></Form>
        <Footer></Footer>
      
    
    </Layout>
   
  )
}
