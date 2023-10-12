import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

export default class App extends Component {
  state = ({
    progress : 0
  })

  setProgress = (progress)=>{
    this.setState({
      progress : progress
    })
  }
  render() {
    return (
      <Router>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
          />

          <Navbar/>
          {/* <News setProgress={this.setProgress} country="us" category="general"/> */}
          <Routes><Route path='/general' element = {<News setProgress={this.setProgress} country="us" category="general"/>}/></Routes>
          <Routes><Route path='/business' element = {<News setProgress={this.setProgress} country="us" category="business"/>}/></Routes>
          <Routes><Route path='/entertainment' element = {<News setProgress={this.setProgress} country="us" category="entertainment"/>}/></Routes>
          <Routes><Route path='/health' element = {<News setProgress={this.setProgress} country="us" category="health"/>}/></Routes>
          <Routes><Route path='/science' element = {<News setProgress={this.setProgress} country="us" category="science"/>}/></Routes>
          <Routes><Route path='/sports' element = {<News setProgress={this.setProgress} country="us" category="sports"/>}/></Routes>
          <Routes><Route path='/technology' element = {<News setProgress={this.setProgress} country="us" category="technology"/>}/></Routes>
      </Router>
    )
  }
}

