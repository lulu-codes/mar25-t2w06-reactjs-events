import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Homepage } from './pages/Homepage.jsx'
import { SearchPage } from './pages/SearchPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { Navbar } from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    {/* <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/search">Search</a> */}
    {/* Instead of anchor tags, use React Router links or navlinks! */}
      <Navbar />
      {/* Navbar is rendered outside of the Routes tree, so all pages can render the navbar! */}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search" element={<SearchPage />} />

      </Routes>

      {/* <App /> */}
    </BrowserRouter>

  </StrictMode>,
)
