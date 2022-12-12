import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

interface Data{
    email_address:string
    status:string
}

interface Url{
    url:string
}

export default async (request:NextApiRequest, response:NextApiResponse)=>{
    const {email_address}:Data = request.body

    if(!email_address){
        return response.status(400).json({error:'Email is required'})
    }
    console.log(email_address)
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const API_SERVER = process.env.MAILCHIMP_API_SERVER
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID
    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`

    const data= { 
        email_address:email_address,
        status:"subscribed"
    }
    const options ={
        headers:{
            'Content-Type':'application/json',
            Authorization: `api_key ${API_KEY}`
        }
    }
    try{
        const response = await axios.post(url,data,options)
        console.log('deu bom')
    }catch(error){
        console.log('deu ruim')
    }
    
}