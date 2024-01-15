import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import MainRecipes from './pages/MainRecipes'
import MainRecipe from './pages/MainRecipe'

import YourRecipes from './pages/YourRecipes'
import YourRecipe from './pages/YourRecipe'

import Astuces from './pages/Astuces'
import Astuce from './pages/Astuce'

import Contact from './pages/Contact'
import ErrorPages from './pages/Error'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/recettes-de-roro" element={<MainRecipes />} />
                <Route path='/recettes-de-roro/:id' element={<MainRecipe />} />
                <Route path="/vos-recettes" element={<YourRecipes />} />
                <Route path="/vos-recettes/:id" element={<YourRecipe />} />
                <Route path="/trucs-et-astuces" element={<Astuces />} />
                <Route path="/trucs-et-astuces/:id" element={<Astuce />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="*" element={<ErrorPages />} />
            </Routes>
        </Router>
  </React.StrictMode>,
)
