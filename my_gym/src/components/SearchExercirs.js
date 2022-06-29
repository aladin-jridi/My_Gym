import { useEffect, useState } from "react"
import React  from 'react';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import { width } from "@mui/system";
import { exerciseOptions,fetchData } from "../utils/fetchData";

const SearchExercirs = () => {
  const [search, setSearch] = useState('')
  // const handleSearch = async () =>{
  //   if(search) {
  //     const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
  //     console.log(exercisesData);
  //   }
  // }
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      // setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems='center' mt ='37px' justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{
            fontSize:{lg: '45px', xs: '30px'}}} mb = '50px' textAlign='center'>
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField
            sx={{input: {fontWeight: '700', border: 'none', borderRadius : '5px'},
                width:{lg: '800px' , xs: '350px'},
                  backgroundColor: '#FFF',
                  borderRadius: '40px'
                }}
                height ='76px'
                value={search}
                onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                placeholder='search Exercises'
                type='text'
            />
            <Button className="search-btn"
                sx={{
                    bgcolor: '#ff2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: {lg: '175px', xs: '80px'},
                    fontSize: {lg: '20px', xs: '14px' },
                    heigth: '56px',
                    position: 'absolute',
                    rigth: '0'

                }}
                onClick={handleSearch}
            >
            search
            </Button>
        </Box>
    </Stack>
  )
}

export default SearchExercirs