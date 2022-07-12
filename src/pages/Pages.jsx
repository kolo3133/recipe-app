import React from 'react'
import Home from './Home'
import Categories from './Categories'
import Searched from './Searched'
import Recipe from './Recipe'
import {Route, Routes,} from 'react-router-dom'

const Pages = () => {
  return (
    
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/categories/:type' element={<Categories />} />
    <Route path='/searched/:search' element={<Searched />} />
    <Route path='/recipe/:idName' element={<Recipe />} />
    </Routes>
    
  )
}

export default Pages