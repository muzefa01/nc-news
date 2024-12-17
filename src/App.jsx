import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from "./Components/Header"
import React from "react";
import ArticleList from './Components/ArticleList'
import './App.css'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<ArticleList />} />
    </Routes>

    </>
  )
}

export default App
