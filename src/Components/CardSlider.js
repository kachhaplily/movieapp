import React, { useState } from 'react'
import { CardMedia ,Box, IconButton} from '@mui/material'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'


const CardSlider = ({images}) => {
    const[count,setcount]=useState(0)
    const next=()=>{
     setcount((precout)=>precout+1)
     
    }
    const pre=()=>{
        setcount((precout)=>precout-1)
        
       }
    return (
       <Box>
         <CardMedia
            sx={{ height: 300 }}
            image={images[count]} 
        />
       <div className='sliderbtn'> 
        <button onClick={pre}><ArrowLeft/></button>
        <button onClick={next}><ArrowRight/></button></div>


       </Box>
    )
}

export default CardSlider