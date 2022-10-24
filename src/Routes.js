import { Routes, Route } from 'react-router-dom'

import { Home } from './Pages/Home/Home'
import { Listing } from './Pages/Listing/Listing'
import { About } from './Pages/About/About'
import { NotFound } from './Pages/NotFound/NotFound'

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
