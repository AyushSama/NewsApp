import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
          <Navbar/>
          <Routes><Route path='/business' element = {<News country="us" category="business"/>}/></Routes>
          <Routes><Route path='/entertainment' element = {<News country="us" category="entertainment"/>}/></Routes>
          <Routes><Route path='/general' element = {<News country="us" category="general"/>}/></Routes>
          <Routes><Route path='/health' element = {<News country="us" category="health"/>}/></Routes>
          <Routes><Route path='/science' element = {<News country="us" category="science"/>}/></Routes>
          <Routes><Route path='/sports' element = {<News country="us" category="sports"/>}/></Routes>
          <Routes><Route path='/technology' element = {<News country="us" category="technology"/>}/></Routes>
      </Router>
    )
  }
}

