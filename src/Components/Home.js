import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MoviedataContext } from './Moviecontext'

const Home = () => {
const [data,setdata]=useContext(MoviedataContext)
useEffect(()=>{
  axios.get("https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON").then(y=>y.status==200?setdata(y.data):"")
},[])
console.log(data)
 

  return (
    <div>
    {
      {/* (data&&data.map((ele)=>{console.log(ele)})) */}
    }


    </div>
  )
}

export default Home