import {Html, Head, Main, NextScript} from 'next/document' //acessando html root do NextJs


export default function Document (){
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
0               <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <body className='bg-pallet-third'>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}