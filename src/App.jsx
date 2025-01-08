import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Header from "./Components/Header"
import React from "react";
import ArticleList from './Components/ArticleList'
import ArticlePage from './Components/ArticlePage'
import NavBar from './Components/NavBar';
import TopicsList from './Components/TopicsList';
import './App.css'

function App() {
  

  return (
    <>
    <Header/>
    <NavBar/>
    <Routes>
    <Route path="/" element={<ArticleList />} />
    <Route path="/articles/:article_id" element={<ArticlePage />} /> 
    <Route path="/topics" element={<TopicsList />} />
    </Routes>

    </>
  )
}

export default App
