import { useEffect, useState } from "react"
import React  from 'react';
import { Box, Button, Stack, TextField, Typography, typography } from "@mui/material";
import { width } from "@mui/system";

const SearchExercirs = () => {
  return (
    <Stack alignItems='center' mt ='37px' justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{
            fontSize:{lg: '45px', xs: '30px'}}} mb = '50px' textAlign='center'>
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField
            sx={{input: {fontWeight: '700', border: 'none', borderRadius : '5px'},
                width:{lg: '1170px' , xs: '350px'},
                  backgroundColor: '#FFF',
                  borderRadius: '40px'
                }}
                height ='76px'
                value=''
                onChange={(e)=>{}}
                placeholder='search Exercises'
                type='text'
            />
        </Box>
    </Stack>
  )
}

export default SearchExercirs