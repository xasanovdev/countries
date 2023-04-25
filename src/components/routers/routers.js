import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/home/home";
import Recommend from "../../pages/recommend/recommend";
import Trending from "../../pages/trending/trending";
import Bookmarked from "../../pages/bookmarked/bookmarked";
import Menu from '../menu/menu';

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Menu/>}>
            <Route index element={<Home/>} />
            <Route path="/trending" element={<Trending/>} />
            <Route path="/recommend" element={<Recommend/>} />
            <Route path="/bookmarked" element={<Bookmarked/>}/>
        </Route>
    </Routes>
  </div>
  )
}

export default Routers