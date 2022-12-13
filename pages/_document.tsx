import {Html, Head, Main, NextScript} from 'next/document' //acessando html root do NextJs


export default function Document (){
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=''/>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet"/>
            </Head>
            <body className='font-Josefin'>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}