import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.jsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import { Homepage } from './pages/Homepage.jsx'
import { SearchPage } from './pages/SearchPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { Navbar } from './components/Navbar.jsx'
import { ContactPage } from './pages/ContactPage.jsx'

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

        <Route path="/about" element={<Outlet />}>
        {/* /about renders  AboutPage */}
          <Route index element={<AboutPage />}/>
          {/* /about/contact does not render AboutPage, only ContactPage! */}
          <Route path="/about/contact" element={<ContactPage />} />
        </Route>


        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:pokemonName" element={<SearchPage />} />

      </Routes>

      {/* <App /> */}
    </BrowserRouter>

  </StrictMode>,
)
