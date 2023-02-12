import React, { useState } from 'react'
import { CardMedia ,Box, IconButton} from '@mui/material'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'


const CardSlider = ({images}) => {
    const[count,setcount]=useState(0)
  
    const next=()=>{
  
    if(count == images.length-1){
        setcount(0);
    } else{
        setcount(count+1)
    }
    }
    const pre=()=>{
        if(count > 0){
            setcount(count-1)
            
       }
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