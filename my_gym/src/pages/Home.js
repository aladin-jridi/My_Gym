// import { useState } from "react"
import React  from 'react'
import { Box } from "@mui/system"
import HeroBanner from "../components/HeroBanner"
import SearchExercirs from "../components/SearchExercirs"
import Exercies from "../components/Exercies"


const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SearchExercirs/>
      <Exercies/>
    </Box>
  )
}

export default Home