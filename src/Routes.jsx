import { Home } from './Pages/Home/Home'
import { Listing } from './Pages/Listing/Listing'
import { About } from './Pages/About/About'
import { NotFound } from './Pages/NotFound/NotFound'

import { Routes, Route } from 'react-router-dom'

/* The AppRoutes function details the routes for our appplication */
export function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/listings/:id" element={<Listing />}/>
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<NotFound />}/>
    </Routes>
  )
}
